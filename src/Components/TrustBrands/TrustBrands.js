import React from 'react';

const TrustBrands = () => {
	return (
		<>
			{/* Trusted Brands Container */}
			<div className='trusted-brands-container w-11/12 mx-auto'>
				<div className='mx-auto py-10  max-w-7xl bg-white text-gray-800'>
					<div className='flex flex-col items-center space-y-12'>
						{/* :TITLE CONTAINER */}
						<div className='mx-auto max-w-2xl space-y-3 text-center'>
							{/* ::Title */}
							<h2 className='text-3xl sm:text-4xl font-bold tracking-wide underline underline-offset-4'>Popular Brands</h2>
							{/* ::Text */}
							<blockquote className='text-sm italic font-semibold text-gray-400 dark:text-white mt-2 text-start'>
								<p>"We have a wide range of products from the most popular brands in the world."</p>
							</blockquote>
						</div>

						{/* :PARTNERS LOGOS */}
						<div className='grid grid-cols-12 gap-0  md:gap-2 lg:gap-4'>
							{/* ::Partner 1 -> ALL */}
							<div className='col-span-6 md:col-span-4 lg:col-span-2 w-full px-8 py-4 flex justify-center items-center bg-gray-100'>
								<img src='https://i.ibb.co/F8cJLvY/volvo.png' alt='' className=' h-[6rem]' />
							</div>

							{/* ::Partner 2 -> Stellantis */}
							<div className='col-span-6 md:col-span-4 lg:col-span-2 w-full px-8  py-4 flex justify-center items-center bg-gray-100'>
								<img src='https://i.ibb.co/0Dn0RJp/lamborghini.png' alt='' className=' h-[6rem]' />
							</div>

							{/* ::Partner 3 -> Blablacar */}
							<div className='col-span-6 md:col-span-4 lg:col-span-2 w-full px-8 py-4 flex justify-center items-center bg-gray-100'>
								<img src='https://i.ibb.co/rGpGYm6/Fiat.png' alt='' className=' h-[6rem]' />
							</div>

							{/* ::Partner 4 -> Boursorama */}
							<div className='col-span-6 md:col-span-4 lg:col-span-2 w-full px-8 py-4 flex justify-center items-center bg-gray-100'>
								<img src='https://i.ibb.co/XLT2XDY/audi.png' alt='' className=' h-[6rem]' />
							</div>

							{/* ::Partner 5 -> Google */}
							<div className='col-span-6 md:col-span-4 lg:col-span-2 w-full px-8 py-4 flex justify-center items-center bg-gray-100'>
								<img src='https://i.ibb.co/zXyYHMX/suzuki.png' alt='' className=' h-[6rem]' />
							</div>
							{/* ::Partner 6 -> Google */}
							<div className='col-span-6 md:col-span-4 lg:col-span-2 w-full px-8 py-4 flex justify-center items-center bg-gray-100'>
								<img src='https://i.ibb.co/Ksr4YzT/Jeep.png' alt='' className=' h-[6rem]' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrustBrands;
