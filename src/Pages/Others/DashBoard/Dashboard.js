import React, { useContext } from 'react';
import { CircleLoader } from 'react-spinners';
import { FbaseAuthContext } from '../../../Context/AuthContextAPI';
import useRole from '../../../Hooks/UserRoleCheck/userRole';
import './DashBoard.css';

const DashBoard = () => {
	const { currentUser } = useContext(FbaseAuthContext);
	const [userRole] = useRole(currentUser?.email);
	return (
		<>
			{/* Dashboard Container */}
			<div className='dashboard-container dashboard bg-gradient-to-r from-red-900 to-red-300 pb-5 rounded-xl '>
				{userRole === 'admin' && (
					<blockquote>
						<div className='wrapper w-11/12 mx-auto md:w-9/12 mt-16 '>
							<div className='-mb-24'>
								<CircleLoader color='#FFFFFF' />
							</div>
							<div className='typing-demo font-extrabold text-center text mt-[6rem]'>
								<h1 className=' text-xl md:text-5xl lg:text-7xl '>
									<span className='bg-red-800 text-white rounded-lg '>ADMIN</span> <span className='underline underline-offset-5'>DASHBOARD</span>
								</h1>
							</div>
							<div className='mt-5'>
								<CircleLoader color='#FFFFFF' />
							</div>
						</div>
					</blockquote>
				)}
				{userRole === 'seller' && (
					<blockquote>
						<div className='wrapper w-11/12 mx-auto md:w-9/12 mt-16 '>
							<div className='-mb-24'>
								<CircleLoader color='#FFFFFF' />
							</div>
							<div className='typing-demo font-extrabold text-center text mt-[6rem]'>
								<h1 className=' text-xl md:text-5xl lg:text-7xl '>
									<span className='bg-red-800 text-white rounded-lg '>ADMIN</span> <span className='underline underline-offset-5'>DASHBOARD</span>
								</h1>
							</div>
							<div className='mt-5'>
								<CircleLoader color='#FFFFFF' />
							</div>
						</div>
					</blockquote>
				)}
				{userRole === 'buyer' && (
					<blockquote>
						<div className='wrapper w-11/12 mx-auto md:w-9/12 mt-16 '>
							<div className='-mb-24'>
								<CircleLoader color='#FFFFFF' />
							</div>
							<div className='typing-demo font-extrabold text-center text mt-[6rem]'>
								<h1 className=' text-xl md:text-5xl lg:text-7xl '>
									<span className='bg-red-800 text-white rounded-lg '>BUYER</span> <span className='underline underline-offset-5'>DASHBOARD</span>
								</h1>
							</div>
							<div className='mt-5'>
								<CircleLoader color='#FFFFFF' />
							</div>
						</div>
					</blockquote>
				)}
			</div>
		</>
	);
};

export default DashBoard;
