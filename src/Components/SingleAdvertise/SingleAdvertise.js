import React from 'react';

const SingleAdvertise = (props) => {
	const {
		image,
		brand_name,
		car_name,
		price: { resale_price },
		used_for
	} = props.add.product;
	return (
		<>
			{/* Single Advertise Container */}
			<div className='single-advertise-container '>
				<div className='relative mx-auto w-full   bg-white'>
					{/* :BACKGROUND IMAGE */}
					<img src={image} alt='' className='absolute inset-0 w-full h-[24.2rem]  md:h-[24.5rem] lg:h-[25rem] object-fill' />
					<div className='absolute bottom-0 block sm:hidden w-full bg-black opacity-40'></div>

					<div className='relative flex flex-col justify-between'>
						{/* ::Starting Price */}
						<div className='py-10 pr-10 flex justify-end'>
							<span className='py-2 px-5 shadow rounded-sm rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-red-800 to-red-600 text-sm sm:text-base lg:text-lg text-white font-semibold uppercase tracking-widest'>
								$ {resale_price}
							</span>
						</div>
						{/* ::Title */}
						<div className='pb-10 pl-10'>
							<h3 className='flex flex-col items-start font-extrabold font-raleway space-y-1.5'>
								<span className='block text-2xl  text-white text-opacity-70 tracking-wide'>Try our</span>
								<span className='block text-4xl  text-white uppercase tracking-wide' style={{ textShadow: '1px 2px 5px black' }}>
									{car_name}
								</span>
								<span className='block text-3xl  text-white text-opacity-70 tracking-wide'>Now</span>
							</h3>
						</div>
						{/* ::Bottom Banner */}
						<div className='py-5 sm:py-10 px-10 flex flex-col sm:flex-row justify-between items-center sm:items-baseline bg-black bg-opacity-60'>
							<h3 className='text-xl sm:text-2xl lg:text-3xl text-white font-semibold font-raleway uppercase tracking-wider'>{brand_name}</h3>
							<a href='#link' className='group mt-5 sm:mt-0 inline-flex items-center text-base sm:text-lg text-white font-medium tracking-wide'>
								<span className='group-hover:underline'>{used_for} years</span>
								{/* <ChevronRightIcon className='relative top-0.5 ml-2 w-6 h-6' /> */}
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleAdvertise;
