import React, { useContext } from 'react';
import * as FAIcons from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';
import useRole from '../../Hooks/UserRoleCheck/userRole';

const DashboardLayout = () => {
	const { currentUser, methodSignOut } = useContext(FbaseAuthContext);
	const [userRole] = useRole(currentUser?.email);

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
			{/* Dashboard Layout */}
			<section className='drawer-section'>
				<div className='drawer drawer-mobile'>
					<input id='dashboard-drawer' type='checkbox' className='drawer-toggle' />
					{/* <!-- Page content here --> */}
					<div className='drawer-content bg-white'>
						<div className='bg-white w-full h-16 shadow-lg flex items-center justify-end px-2'>
							<label htmlFor='dashboard-drawer' className='btn btn-ghost drawer-button lg:hidden'>
								<FAIcons.FaAlignJustify />
							</label>
						</div>
						{/* Outlet Section */}
						<section className='outlet-section p-8'>
							<Outlet />
						</section>
						{/* -------------------------- */}
					</div>
					{/* <!-- Page Sidebar here --> */}
					<div className='drawer-side shadow-xl '>
						<label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
						{/* <!-- Sidebar content here --> */}
						<div className='flex flex-col w-64 px-4 py-8 bg-white border-r relative '>
							<label htmlFor='dashboard-drawer' className='btn btn-ghost drawer-button lg:hidden absolute top-0 right-0'>
								<FAIcons.FaAlignJustify />
							</label>
							<NavLink to='/'>
								<div className='absolute right-4 top-[3.1rem] btn btn-ghost btn-sm border border-red-700'>
									<FAIcons.FaHome className='text-red-700' />
								</div>
							</NavLink>
							<div className='flex justify-between'>
								<div className=''>
									<NavLink to='/' aria-label='Company' title='CarBazar' className='inline-flex items-center'>
										<span>
											<img src='Images/logo.png' alt='logo' className='w-16 h-1/2' />
										</span>
										<span className='ml-2 text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-500'>CarBazar</span>
									</NavLink>
								</div>
							</div>

							<div className='relative mt-6'>
								<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
									<svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='none'>
										<path
											d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										></path>
									</svg>
								</span>

								<input
									type='text'
									className='w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md  focus:border-blue-400  focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
									placeholder='Search'
								/>
							</div>

							<div className='drawer-side'>
								<label className='drawer-overlay' htmlFor='dashboard-drawer'></label>
								<div className='flex flex-col justify-between flex-1 mt-6'>
									<nav className='relative'>
										<Link to='/dashboard' className='flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md '>
											<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17'
													stroke='currentColor'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>

											<span className='mx-4 font-medium'>Dashboard</span>
										</Link>

										{/* Buyer's Menu Itema */}
										{userRole === 'buyer' && (
											<Link to='/dashboard/my-orders' className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200   hover:text-gray-700'>
												<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
													/>
													<path d='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
												</svg>

												<span className='mx-4 font-medium'>My Orders</span>
											</Link>
										)}
										{/* Sellers's Menu Itema */}
										{userRole === 'seller' && (
											<>
												<Link to='add-product' className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200  hover:text-gray-700'>
													<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
														<path
															d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
															stroke='currentColor'
															strokeWidth='2'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>

													<span className='mx-4 font-medium'>Add A product</span>
												</Link>
												<Link to='my-products' className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200  hover:text-gray-700'>
													<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
														<path
															d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
															stroke='currentColor'
															strokeWidth='2'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>

													<span className='mx-4 font-medium'>My Products</span>
												</Link>
												<Link to='/' className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-200  hover:text-gray-700'>
													<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
														<path
															d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
															stroke='currentColor'
															strokeWidth='2'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>

													<span className='mx-4 font-medium'>My Buyers</span>
												</Link>
											</>
										)}
										{/* Admin's Menu Itema */}
										{userRole === 'admin' && (
											<>
												<Link to='/dashboard/all-sellers' className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200  hover:text-gray-700'>
													<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
														<path
															d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
															stroke='currentColor'
															strokeWidth='2'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>

													<span className='mx-4 font-medium'>All Sellers</span>
												</Link>
												<Link to='/dashboard/all-buyers' className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200  hover:text-gray-700'>
													<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
														<path
															d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
															stroke='currentColor'
															strokeWidth='2'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>

													<span className='mx-4 font-medium'>All Buyers</span>
												</Link>
												<Link to='/dashboard/reported-items' className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200  hover:text-gray-700'>
													<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
														<path
															d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
															stroke='currentColor'
															strokeWidth='2'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>

													<span className='mx-4 font-medium'>Repoted Items</span>
												</Link>
											</>
										)}

										<hr className='my-6 border-gray-200 absolute bottom-20' />
										{currentUser && currentUser.uid ? (
											<>
												<NavLink to='/login' className='fixed bottom-5 '>
													<button
														className='inline-flex items-center justify-center h-12 px-16 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none '
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
												<NavLink to='/login' className='fixed bottom-5 '>
													<button
														className='inline-flex items-center justify-center h-12 px-20 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none '
														aria-label='Login'
														title='Login'
													>
														LOGIN
													</button>
												</NavLink>
											</>
										)}
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			;
		</>
	);
};

export default DashboardLayout;
