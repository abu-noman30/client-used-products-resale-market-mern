import React from 'react';
import CarCatagory from '../../Shared/CarCatagory/CarCatagory';
import Header from '../../Shared/Header/Header';

const Home = () => {
	// window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	return (
		<>
			{/* Home Container */}
			<div className='home-container'>
				{/* Header Section */}
				<section className='header-section'>
					<Header />
				</section>
				{/* Car's Catagory Container  */}
				<section className='cars-catagory-section'>
					<CarCatagory />
				</section>
				{/* Secure Transation Section */}
				<section className='secure-transation-section'>{/* <SecureTransation /> */}</section>
				{/* Advertise Section */}
				<section className='advertise-section'></section>
			</div>
		</>
	);
};

export default Home;
