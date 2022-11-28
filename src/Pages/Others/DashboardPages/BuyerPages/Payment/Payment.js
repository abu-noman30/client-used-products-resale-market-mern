import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../../../../Components/Other/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

//  Set `loadStripe` outside of a component’s
const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
const Payment = () => {
	const loaderData = useLoaderData();
	const orderData = loaderData;
	// console.log(loaderData);
	const navigation = useNavigation();

	if (navigation.state === 'loading') {
		return (
			// Spinner component
			<Spinner />
		);
	}
	return (
		<>
			{/* Payment Container */}
			<div className='payment-container'>
				{/* Payment Header */}
				<div className='myappointments-header flex flex-col items-center justify-center  mb-12 mt-2'>
					<h2 className='font-semibold text-3xl text-gray-600 underline underline-offset-2  text-center '>PAYMENT</h2>
				</div>
				{/* Payment Description */}
				{/* <div className='payment-description'></div> */}
				{/* Payment Card Body */}
				<div className='payment-card-body'>
					<Elements stripe={stripePromise}>
						<CheckoutForm orderData={orderData} />
					</Elements>
				</div>
			</div>
		</>
	);
};

export default Payment;
