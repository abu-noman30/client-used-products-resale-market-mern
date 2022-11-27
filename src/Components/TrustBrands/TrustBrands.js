import React from 'react';

const TrustBrands = () => {
	return (
		<>
			{/* Trusted Brands Container */}
			<div className='trusted-brands-container'>
				<div className='mx-auto py-10 px-4 w-full max-w-8xl bg-white text-gray-800'>
					<div className='flex flex-col items-center space-y-12'>
						{/* :TITLE CONTAINER */}
						<div className='mx-auto max-w-2xl space-y-3 text-center'>
							{/* ::Title */}
							<h2 className='text-3xl sm:text-4xl font-bold tracking-wide'>Our Trusted Partners</h2>
							{/* ::Text */}
							<p className='text-sm sm:text-base text-gray-700'>
								Eaque totam placeat fuga neque quam vero. Harum nesciunt voluptate quidem, repudiandae nihil repellendus praesentium impedit sequi non modi ipsa! Libero, nostrum?
							</p>
						</div>

						{/* :PARTNERS LOGOS */}
						<div className='grid grid-cols-6 gap-6'>
							{/* ::Partner 1 -> ALL */}
							<div className='col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100'>
								<img src='https://fancytailwind.com/static/all-limitless-logo-a2bc67b04c70cbdaf47b69769ee38c39.svg' alt='' className='max-h-6 opacity-80' />
							</div>

							{/* ::Partner 2 -> Stellantis */}
							<div className='col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100'>
								<img src='https://fancytailwind.com/static/stellantis-logo-ee3d9a8d3b58a82e1a508260c6daa19a.svg' alt='' className='max-h-6 opacity-80' />
							</div>

							{/* ::Partner 3 -> Blablacar */}
							<div className='col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100'>
								<img src='https://fancytailwind.com/static/blablacar-logo-black-d14f356f24cf3b23017d777b9909293c.svg' alt='' className='max-h-6 opacity-80' />
							</div>

							{/* ::Partner 4 -> Boursorama */}
							<div className='col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100'>
								<img src='https://fancytailwind.com/static/boursorama-banque-logo-black-c5350d0ae1d37f43c2fe206580f279bb.svg' alt='' className='max-h-6 opacity-80' />
							</div>

							{/* ::Partner 5 -> Google */}
							<div className='col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100'>
								<img src='https://fancytailwind.com/static/google-full-black-26e70f93bf2cb3c4f893afd587bc89b2.png' alt='' className='max-h-6 opacity-80' />
							</div>

							{/* ::Partner 6 -> Microsoft */}
							<div className='col-span-3 sm:col-span-2 lg:col-span-1 py-12 px-5 flex justify-center items-center bg-gray-100'>
								<img src='https://fancytailwind.com/static/microsoft-logo-29676a36b829016b82e0d8d1865c842b.svg' alt='' className='max-h-6 opacity-80' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrustBrands;
