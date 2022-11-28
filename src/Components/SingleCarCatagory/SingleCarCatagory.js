import React from 'react';

const SingleCarCatagory = (props) => {
	const { brand_name, image } = props.brand;
	return (
		<>
			{/* Single Car Catagory Container */}
			<div className='single-car-catagory-container ' data-aos='zoom-in'>
				<div className=' flex-row shadow-sm'>
					<div className='col-span-3 sm:col-span-2 lg:col-span-1 h-[8rem] px-5 flex justify-center items-center bg-gray-100 '>
						<img src={image} alt='' className='w-full object-fill object-center h-28' />
					</div>

					<div className=' -mt-0  overflow-hidden shadow-lg w-full inline-flex items-center justify-center px-1 font-medium tracking-wide text-white transition duration-200 rounded bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none'>
						<h3 className='py-2 font-bold tracking-wide text-center uppercase text-white px-5'>{brand_name}</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleCarCatagory;
