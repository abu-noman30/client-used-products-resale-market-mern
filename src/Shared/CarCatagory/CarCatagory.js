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
			<div className='car-catagories-container w-10/12 mx-auto mt-10'>
				<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
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
