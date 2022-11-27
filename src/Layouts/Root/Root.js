import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
	return (
		<>
			{/* Navbar Section */}
			<div className='navbar-section'>
				<Navbar />
			</div>
			{/* Outlet/Main Section */}
			<div className='outlet-section'>
				<Outlet />
			</div>
			{/* Footer Section */}
			<div className='footer-section'>
				<Footer />
			</div>
		</>
	);
};

export default Root;
