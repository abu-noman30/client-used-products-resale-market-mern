import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = (props) => {
	const { orderData } = props;
	const {
		buyerInfo: { buyerName, email },
		carInfo: { price }
	} = orderData;

	console.log(orderData);
	const [cardError, setCardError] = useState('');

	const [paymentSuccess, setPaymentSuccess] = useState('');
	const [paymentTransactionID, setPaymentTransactionID] = useState('');
	const [processLoading, setProcessLoading] = useState(false);

	const [clientSecret, setClientSecret] = useState('');
	const stripe = useStripe();
	const elements = useElements();

	const navigate = useNavigate();

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch('http://localhost:5000/create-payment-intent', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('jwtToken')}`
			},
			body: JSON.stringify({ price })
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [price]);

	const handlerOnSubmit = async (e) => {
		// Block native form submission.
		e.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}
		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}
		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card
		});

		if (error) {
			console.log('[error]', error);
			setCardError(error.message);
		} else {
			console.log('[PaymentMethod]', paymentMethod);
			setCardError('');
		}

		setPaymentSuccess('');
		setProcessLoading(true);

		const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: card,
				billing_details: {
					name: buyerName,
					email: email
				}
			}
		});

		if (confirmError) {
			console.log('[confirmError]', confirmError);
			setCardError(confirmError.message);
			return;
		}
		console.log(paymentIntent);
		if (paymentIntent.status === 'succeeded') {
			setPaymentSuccess(paymentSuccess);
			setPaymentTransactionID(paymentIntent.id);
			setCardError('');
			setProcessLoading(false);

			// Store the payment Information in the database
			const paymentInfo = {
				orderData: orderData,
				price: price,
				transactionID: paymentIntent.id,
				paymentMethod: paymentIntent.payment_method
			};

			fetch('http://localhost:5000/payments', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('jwtToken')}`
				},
				body: JSON.stringify(paymentInfo)
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data?.message) {
						setPaymentSuccess(data.message);
						toast.success(data.message);
						// setPaymentTransactionID(paymentIntent.id);
						navigate('/dashboard/my-orders');
					}
				});
		}
	};

	return (
		<>
			{/* CheckoutForm Container */}
			<div className='checkout-form-container flex justify-center'>
				<div className=' w-full md:w-8/12 lg:w-4/12 bg-gray-200 p-6 rounded-lg border border-blue-600'>
					<h1 className='relative text-2xl sm:text-3xl text-gray-700 font-medium mb-5'>
						Secure Checkout
						<span className='mt-2 w-10 sm:w-20 h-1 block bg-indigo-600' />
					</h1>
					<form
						onSubmit={(e) => {
							handlerOnSubmit(e);
						}}
					>
						<div className=' bg-white p-6 rounded-lg'>
							<CardElement
								options={{
									style: {
										base: {
											fontSize: '16px',
											color: '#000000',
											textDecoration: 'underline',
											fontFamily: 'sans-serif',

											'::placeholder': {
												color: '#9da4af'
											}
										},
										invalid: {
											color: '#9e2146'
										}
									}
								}}
							/>
						</div>
						<p className='mt-10 text-center text-sm text-gray-500 font-semibold'>
							By placing this order you agree to the{' '}
							<a href='#link' className='text-indigo-400 underline hover:text-indigo-600 whitespace-nowrap'>
								Terms and Conditions
							</a>
						</p>
						<div className='flex justify-end'>
							<button type='submit' className='btn bg-blue-700 hover:bg-blue-800 btn-sm mt-5 text-white ' disabled={!stripe || !clientSecret || processLoading}>
								Pay Now
							</button>
						</div>
					</form>
					<p className='text-red-700 font-bold mt-5 text-center'>{cardError}</p>
					{paymentSuccess && (
						<>
							<p className='text-green-700 font-bold'>{paymentSuccess}</p>
							<p className='text-green-700 font-bold'>Transaction ID: {paymentTransactionID}</p>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default CheckoutForm;
