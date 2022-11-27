import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCarCatagory from '../../Components/SingleCarCatagory/SingleCarCatagory';

const CarCatagory = () => {
	const [carBrands, setCarBrands] = useState([]);
	useEffect(() => {
		const fetchCarCatagory = async () => {
			const res = await fetch('http://localhost:5000/category');
			const data = await res.json();
			console.log(data);
			setCarBrands(data);
		};
		fetchCarCatagory();
	}, []);
	return (
		<>
			{/* Car Catagories Container */}
			<div className='car-catagories-container w-11/12 max-w-7xl mx-auto mt-10 px-0 md:px-16 lg:px-0 mb-10 '>
				<div className=' mb-10 w-1/2 mx-auto text-center'>
					<div className='flex flex-col justify-center items-center bg-cover bg-clip-text text-black bg-center  text-transparent text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide antialiased underline underline-offset-4'>
						Choose your Brand
					</div>
					<blockquote class='text-sm italic font-semibold text-gray-400 dark:text-white mt-2'>
						<p>" Choose your brand, choose your car. Select your car from the list of brands below."</p>
					</blockquote>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6'>
					{/* Car Catagory Card */}
					{carBrands.map((brand) => (
						<Link to={`/category/${brand._id}`} key={brand._id}>
							<SingleCarCatagory brand={brand} />
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default CarCatagory;
