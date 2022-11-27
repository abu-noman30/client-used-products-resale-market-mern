import React from 'react';

const TrustBrands = () => {
	return (
		<>
			{/* Trusted Brands Container */}
			<div className='trusted-brands-container'>
				<div className='mx-auto py-10 px-4 w-full max-w-7xl bg-white text-gray-800'>
					<div className='flex flex-col items-center space-y-12'>
						{/* :TITLE CONTAINER */}
						<div className='mx-auto max-w-2xl space-y-3 text-center'>
							{/* ::Title */}
							<h2 className='text-3xl sm:text-4xl font-bold tracking-wide'>Popular Brands</h2>
							{/* ::Text */}
							<blockquote class='text-sm italic font-semibold text-gray-400 dark:text-white mt-2'>
								<p>" We have partnered with the best brands in the world to bring you the best products at the best prices. "</p>
							</blockquote>
						</div>

						{/* :PARTNERS LOGOS */}
						<section class='px-4 py-5 mx-auto max-w-7xl'>
							<div class='grid grid-cols-2 gap-2 text-center lg:grid-cols-12'>
								<div class='flex items-center justify-center p-6 bg-opacity-25 bg-primary-light col-span-2'>
									<img src='https://i.ibb.co/ZB9HNxB/error.png' alt='Todoist Logo' class='block object-contain h-16' />
								</div>
								<div class='flex items-center justify-center p-6 bg-opacity-25 bg-primary-light'>
									<img src='https://i.ibb.co/ZB9HNxB/error.png' alt='Slack Logo' class='block object-contain h-16' />
								</div>
								<div class='flex items-center justify-center p-6 bg-opacity-25 bg-primary-light'>
									<img src='https://i.ibb.co/ZB9HNxB/error.png' alt='Typeform Logo' class='block object-contain h-16' />
								</div>
								<div class='flex items-center justify-center p-6 bg-opacity-25 bg-primary-light'>
									<img src='https://i.ibb.co/ZB9HNxB/error.png' alt='Postcss Logo' class='block object-contain h-16' />
								</div>
								<div class='flex items-center justify-center p-6 bg-opacity-25 bg-primary-light'>
									<img src='https://i.ibb.co/ZB9HNxB/error.png' alt='Yahoo Logo' class='block object-contain h-16' />
								</div>
								<div class='flex items-center justify-center p-6 bg-opacity-25 bg-primary-light'>
									<img src='https://i.ibb.co/ZB9HNxB/error.png' alt='Algolia Logo' class='block object-contain h-16' />
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrustBrands;
