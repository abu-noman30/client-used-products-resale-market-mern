import React from 'react';

const SingleCarCatagory = (props) => {
	const { brand_name, image } = props.brand;
	return (
		<>
			{/* Single Car Catagory Container */}
			<div className='single-car-catagory-container'>
				<div className='flex flex-col items-center justify-center w-full max-w-sm mx-auto'>
					<div className='w-full h-48 bg-gray-200 bg-center bg-cover rounded-lg shadow-lg shadow-red-200 border border-spacing-2 border-red-900'>
						<img src={image} alt='' className='w-full h-40' />
					</div>

					<div className=' -mt-5 overflow-hidden shadow-lg w-4/6 inline-flex items-center justify-center px-1 font-medium tracking-wide text-white transition duration-200 rounded bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none'>
						<h3 className='py-2 font-bold tracking-wide text-center uppercase text-white'>{brand_name}</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleCarCatagory;
