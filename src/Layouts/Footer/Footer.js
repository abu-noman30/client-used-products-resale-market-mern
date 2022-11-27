import React from 'react';

const Footer = () => {
	return (
		<>
			{/* Footer Container */}
			<div className='footer-container'>
				<footer className='w-full py-6 px-4 bg-gray-600'>
					{/* Container */}
					<h2 className='sr-only'>Footer</h2>
					<div className='mx-auto max-w-7xl flex flex-col items-center text-gray-200'>
						<div className='w-full flex flex-col md:flex-row flex-wrap justify-between items-center'>
							{/* :SOCIAL NETWORKS */}
							<div className='py-4 px-2 flex'>
								{/* Facebook */}
								<a href='#link' className='text-gray-200'>
									<span className='sr-only'>Facebook</span>
									<svg fill='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-6 h-6' viewBox='0 0 24 24'>
										<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
									</svg>
								</a>
								{/* Twitter */}
								<a href='#link' className='ml-3 text-gray-200'>
									<span className='sr-only'>Twitter</span>
									<svg fill='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-6 h-6' viewBox='0 0 24 24'>
										<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
									</svg>
								</a>
								{/* Instagram */}
								<a href='#link' className='ml-3 text-gray-200'>
									<span className='sr-only'>Instagram</span>
									<svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-6 h-6' viewBox='0 0 24 24'>
										<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
										<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
									</svg>
								</a>
								{/* Linkedin */}
								<a href='#link' className='ml-3 text-gray-200'>
									<span className='sr-only'>Linkedin</span>
									<svg fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0' className='w-6 h-6' viewBox='0 0 24 24'>
										<path stroke='none' d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'></path>
										<circle cx='4' cy='4' r='2' stroke='none'></circle>
									</svg>
								</a>
								{/* GitHub */}
								<a href='#link' className='ml-3 text-gray-200'>
									<span className='sr-only'>GitHub</span>
									<svg fill='currentColor' className='h-6 w-6' viewBox='0 0 24 24' aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
											clipRule='evenodd'
										/>
									</svg>
								</a>
							</div>

							{/* :NAVIGATION */}
							<nav className='py-4 px-2 flex flex-wrap justify-center list-none'>
								<li className='p-3 hover:font-semibold'>
									<a href='#link'>Solutions</a>
								</li>
								<li className='p-3 hover:font-semibold'>
									<a href='#link'>Pricing</a>
								</li>
								<li className='p-3 hover:font-semibold'>
									<a href='#link'>About</a>
								</li>
								<li className='p-3 hover:font-semibold'>
									<a href='#link'>Contact</a>
								</li>
								<li className='p-3 hover:font-semibold'>
									<a href='#link'>Press</a>
								</li>
								<li className='p-3 hover:font-semibold'>
									<a href='#link'>Partners</a>
								</li>
							</nav>

							{/* :CONTACT */}
							<div className='px-2 flex flex-col'>
								{/* Email */}
								<p className='flex text-xs text-gray-300 font-medium tracking-wide'>
									<svg xmlns='http://www.w3.org/2000/svg' className='mr-1 h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
										<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
										<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
									</svg>
									<a href='#email'>fancytailwind@paradise.com</a>
								</p>
								{/* Phone */}
								<p className='flex text-xs text-gray-300 font-bold'>
									<svg xmlns='http://www.w3.org/2000/svg' className='mr-1 h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
										/>
									</svg>
									<span>209-217-2459</span>
								</p>
							</div>
						</div>

						{/* :COPYRIGHT */}
						<p className='pt-10 text-sm text-gray-300 text-center'>&copy;2021, Fancy Tailwind All Rights Reserved.</p>
					</div>
				</footer>
			</div>
		</>
	);
};

export default Footer;
