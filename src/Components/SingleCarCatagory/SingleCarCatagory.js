import React from 'react';

const SingleCarCatagory = (props) => {
	const { brand_name, image } = props.brand;
	return (
		<>
			{/* Single Car Catagory Container */}
			<div className='single-car-catagory-container'>
				<div className='flex flex-col items-center justify-center w-full max-w-sm mx-auto'>
					<div
						className='w-full h-48 bg-gray-300 bg-center bg-cover rounded-lg shadow-md'
						// style='background-image: url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)'
					>
						<img src={image} alt='' className='w-full h-40' />
					</div>

					<div className=' -mt-5 overflow-hidden rounded-lg shadow-lg w-4/6 bg-gray-800'>
						<h3 className='py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white'>{brand_name}</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleCarCatagory;