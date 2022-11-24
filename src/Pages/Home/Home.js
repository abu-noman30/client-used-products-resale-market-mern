import React from 'react';
import CarCatagory from '../../Shared/CarCatagory/CarCatagory';

const Home = () => {
	return (
		<>
			{/* Home Container */}
			<div className='home-container'>
				{/* Header Container */}
				<section className='header-section'></section>
				{/* Car's Catagory Container  */}
				<section className='cars-catagory-section'>
					<CarCatagory />
				</section>
				{/* Advertise Section */}
				<section className='advertise-section'></section>
			</div>
		</>
	);
};

export default Home;
