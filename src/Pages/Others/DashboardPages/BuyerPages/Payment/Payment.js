import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

//  Set `loadStripe` outside of a component’s
const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
const Payment = () => {
	const loaderData = useLoaderData();
	const orderData = loaderData;
	console.log(loaderData);
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
