import React from 'react';
import CarCatagory from '../../Shared/CarCatagory/CarCatagory';
import Header from '../../Shared/Header/Header';
import SecureTransation from '../../Shared/SecureTransation/SecureTransation';

const Home = () => {
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
				<section className='secure-transation-section'>
					<SecureTransation />
				</section>
				{/* Advertise Section */}
				<section className='advertise-section'></section>
			</div>
		</>
	);
};

export default Home;
