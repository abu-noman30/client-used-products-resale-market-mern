import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardNav = () => {
	return (
		<>
			{/* Navbar Container */}
			<div className='navbar-container w-11/12 mx-auto '>
				<div className='py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
					<div className='relative flex items-center justify-between z-2'>
						<ul className='hidden items-center space-x-8 lg:flex'>
							<li className='border border-red-700 rounded-md'>
								<NavLink
									to='/home'
									aria-label='Home'
									title='Home'
									className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 '
									style={({ isActive }) => ({
										color: isActive ? '#CD0000' : ''
									})}
								>
									<span className='flex items-center justify-start text-xl hover:bg-slate-100 rounded-lg p-2 '>Home</span>
								</NavLink>
							</li>
							<li className='border border-red-700 rounded-md'>
								<NavLink
									to='/blog'
									aria-label='Blog'
									title='Blog'
									className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
									style={({ isActive }) => ({
										color: isActive ? '#CD0000' : ''
									})}
								>
									<span className='flex items-center justify-start text-xl hover:bg-slate-100 rounded-lg p-2'>Blog</span>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardNav;
