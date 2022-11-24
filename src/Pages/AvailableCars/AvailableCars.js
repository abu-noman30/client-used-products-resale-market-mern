import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AvailableCars = () => {
	const loaderData = useLoaderData();
	console.log(loaderData);

	return (
		<>
			{/* Available Cars Conainer */}
			<div className='available-cars-container'>Cars</div>
		</>
	);
};

export default AvailableCars;
