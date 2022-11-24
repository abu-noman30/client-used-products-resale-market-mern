import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { currentUser, methodSignOut } = useContext(FbaseAuthContext);

	// User logout
	const handlerOnLogout = () => {
		methodSignOut()
			.then(() => {
				// Sign-out successful.
				localStorage.removeItem('jwtToken');
			})
			.catch((error) => {
				// An error happened.
			});
	};
	return (
		<>
			{/* Navbar Container */}
			<div className='navbar-container '>
				<div className='px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
					<div className='relative flex items-center justify-between z-2'>
						<NavLink to='/' aria-label='carBazar' title='carBazar' className='inline-flex items-center'>
							<span>
								<img src='Images/logo.png' alt='logo' className='w-14 h-14' />
							</span>
							<span className='ml-2 text-xl lg:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-500 '>CarBazar</span>
						</NavLink>
						<ul className='hidden items-center space-x-8 lg:flex'>
							<li>
								<NavLink
									to='/home'
									aria-label='Home'
									title='Home'
									className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
									style={({ isActive }) => ({
										color: isActive ? '#CD0000' : ''
									})}
								>
									<span className='flex items-center justify-start text-xl hover:bg-slate-100 rounded-lg p-2 '>Home</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/das'
									aria-label='Dashboard'
									title='Dashboard'
									className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
									style={({ isActive }) => ({
										color: isActive ? '#CD0000' : ''
									})}
								>
									<span className=' flex items-center justify-start text-xl hover:bg-slate-100 rounded-lg p-2'>Dashboard</span>
								</NavLink>
							</li>
							<li>
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
						<ul className='hidden items-center space-x-8 lg:flex'>
							<li>
								{currentUser && currentUser.uid ? (
									<>
										<NavLink to='/login'>
											<button
												className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none'
												aria-label='Logout'
												title='Logout'
												onClick={() => {
													handlerOnLogout();
												}}
											>
												LOGOUT
											</button>
										</NavLink>
									</>
								) : (
									<>
										<NavLink
											to='/login'
											className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none'
											aria-label='Login'
											title='Login'
										>
											Login
										</NavLink>
									</>
								)}
							</li>
						</ul>
						<div className='lg:hidden'>
							<button
								aria-label='Open Menu'
								title='Open Menu'
								className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
								onClick={() => setIsMenuOpen(true)}
							>
								<svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
									<path fill='currentColor' d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z' />
									<path fill='currentColor' d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z' />
									<path fill='currentColor' d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z' />
								</svg>
							</button>
							{isMenuOpen && (
								<div className='absolute top-0 left-0 w-full z-10'>
									<div className='p-5 bg-white border rounded shadow-sm'>
										<div className='flex items-center justify-between mb-4'>
											<div>
												<NavLink to='/' aria-label='Company' title='eduCamp' className='inline-flex items-center'>
													<span>
														<img src='Images/logo.png' alt='logo' className='w-16 h-1/2' />
													</span>
													<span className='ml-2 text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-500'>CarBazar</span>
												</NavLink>
											</div>
											<div className='flex items-center justify-end'>
												<button
													aria-label='Close Menu'
													title='Close Menu'
													className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline ml-4 md:ml-16'
													onClick={() => setIsMenuOpen(false)}
												>
													<svg className='w-5 text-gray-600 ' viewBox='0 0 24 24'>
														<path
															fill='currentColor'
															d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
														/>
													</svg>
												</button>
											</div>
										</div>
										<nav>
											<ul className='space-y-4 grid '>
												<li>
													<NavLink
														to='/home'
														aria-label='Home'
														title='Home'
														className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
														style={({ isActive }) => ({
															color: isActive ? '#CD0000' : ''
														})}
													>
														<span className='flex items-center justify-start'>Home</span>
													</NavLink>
												</li>
												<li>
													<NavLink
														to='/dashboard'
														aria-label='Dashboard'
														title='Dashboard'
														className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
														style={({ isActive }) => ({
															color: isActive ? '#CD0000' : ''
														})}
													>
														<span className='flex items-center justify-start'>Dashboard</span>
													</NavLink>
												</li>
												<li>
													<NavLink
														to='/blog'
														aria-label='Blog'
														title='Blog'
														className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
														style={({ isActive }) => ({
															color: isActive ? '#CD0000' : ''
														})}
													>
														<span className='flex items-center justify-start'>Blog</span>
													</NavLink>
												</li>

												<li>
													{currentUser && currentUser.uid ? (
														<>
															<NavLink to='/login'>
																<button
																	className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none'
																	aria-label='Logout'
																	title='Logout'
																	onClick={() => {
																		handlerOnLogout();
																	}}
																>
																	LOGOUT
																</button>
															</NavLink>
														</>
													) : (
														<>
															<NavLink to='/login'>
																<button
																	className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none'
																	aria-label='Login'
																	title='Login'
																>
																	Login
																</button>
															</NavLink>
														</>
													)}
												</li>
											</ul>
										</nav>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
