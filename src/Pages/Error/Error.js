import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<>
			{/* Error Container */}
			<div className='error-container'>
				<section className='px-4 py-24 mx-auto max-w-7xl'>
					<div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
						<div className='w-full h-full  bg-gray-200 rounded-lg'>
							<img src='https://i.ibb.co/ZB9HNxB/error.png' alt='' />
						</div>
						<div className=''>
							<p className='mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase'>Error 404</p>
							<h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>Oops! The page you're looking for isn't here.</h1>
							<p className='mb-5 text-base text-left text-gray-800 md:text-xl'>You might have the wrong address, or the page may have moved.</p>
							<Link
								to='/'
								className='w-full mb-2 btn  sm:w-auto sm:mb-0 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none'
							>
								Back to homepage
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Error;
