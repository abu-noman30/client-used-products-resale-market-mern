import React, { useEffect } from 'react';

const AvailableCars = () => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('http://localhost:5000/category');
				const data = await res.json();
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			{/* Available Cars Conainer */}
			<div className='available-cars-container'>Cars</div>
		</>
	);
};

export default AvailableCars;
