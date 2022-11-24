import React from 'react';

const PrimaryButton = ({ children }) => {
	return (
		<>
			<button className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-red-900 focus:shadow-outline focus:outline-none bg-gradient-to-r from-red-800 to-red-600 '>
				{children}
			</button>
		</>
	);
};

export default PrimaryButton;
