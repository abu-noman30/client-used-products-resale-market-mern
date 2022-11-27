import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';
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
			<div className='w-1/2 mx-auto h-[28rem] my-auto flex items-center justify-center'>
				<span className=''>
					<ClockLoader color='#777777' />
				</span>
			</div>
		);
	}
	return (
		<>
			{/* Payment Container */}
			<div className='payment-container'>
				{/* Payment Header */}
				<div className='myappointments-header flex items-center justify-between mb-3'>
					<h1 className='text-2xl font-bold'>Payment</h1>
					<button className='btn btn-ghost border-2 border-gray-200'>May 10, 2022</button>
				</div>
				{/* Payment Description */}
				<div className='payment-description'>
					<p>
						{/* <span>{appointmentDate}</span> <span>{name}</span> <span>{email}</span> <span>{phone}</span> <span>{price}</span> <span>{treatment.name}</span>
						<span>{slot}</span> */}
					</p>
				</div>
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
