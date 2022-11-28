import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			{/* Header Container */}
			<div className='header-container mb-20'>
				<div className='relative flex flex-col-reverse py-0 lg:pt-0 lg:flex-col lg:pb-0 '>
					<div className='inset-y-0 top-0 right-0 z-0 w-full max-w-2xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0'>
						<svg className='absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block' viewBox='0 0 100 100' fill='currentColor' preserveAspectRatio='none slice'>
							<path d='M50 0H100L50 100H0L50 0Z' />
						</svg>
						<img className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full' src='https://i.ibb.co/T0dgDbT/Used-Cars-For-Sale-Cincinnati-OH-lot.jpg' alt='' />
					</div>
					<div className='relative flex flex-col items-start w-full max-w-2xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl '>
						<div className='mb-16 lg:my-32 lg:max-w-lg lg:pr-5'>
							<h2 className='mb-5 font-sans text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl sm:leading-none italic'>
								Find the Best
								<br className='hidden md:block' />
								<strong>
									<span className='inline-block text-red-800 border-b-8 border-red-800'>USED CAR</span>
								</strong>
								<br className='hidden md:block' />
								For You
							</h2>
							<p className='pr-5 mb-5 text-base text-gray-500 '>
								We have a wide range of used cars for sales.We are here to help you find the perfect car for you. Our inventory is updated daily and we have a wide range of makes and models to choose from.
							</p>
							<div className='flex flex-col md:flex-row text-center items-start justify-start'>
								<Link
									to='/'
									className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none'
								>
									Get started
								</Link>
								<Link to='/' className='group relative inline-flex items-center overflow-hidden rounded border border-current px-[1.8rem] py-[0.8rem] text-black focus:outline-none focus:ring active:text-indigo-500'>
									<span className='absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4'>
										<svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 8l4 4m0 0l-4 4m4-4H3' />
										</svg>
									</span>

									<span className='text-sm font-medium transition-all group-hover:mr-4'>Learn More</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
