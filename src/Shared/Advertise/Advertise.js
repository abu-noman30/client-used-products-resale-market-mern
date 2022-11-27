import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleAdvertise from '../../Components/SingleAdvertise/SingleAdvertise';

const Advertise = () => {
	const [advertiseData, setAdvertiseData] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			const res = await axios.get('http://localhost:5000/advertise');
			setAdvertiseData(res.data);
		};
		fetchAPI();
	}, []);

	console.log(advertiseData);
	return (
		<>
			{/* Advertise Container */}
			{advertiseData.length > 0 && (
				<div className='advertise-container w-11/12 mx-auto mb-20'>
					<div className='advertise-title'>
						<div className='relative mx-auto w-full bg-gray-200'>
							<div className='mx-auto max-w-sm sm:max-w-2xl lg:max-w-none py-5 px-4 w-full'>
								{/* :TITLE */}
								<div className='flex items-center'>
									<h2 className='text-xl lg:text-2xl text-gray-700 font-bold font-oswald uppercase tracking-wider'>Discover New Collections</h2>
									<span className='ml-3 w-1/4 h-0.5 bg-gray-400' />
								</div>

								{/* :PRODUCT SUGGESTION */}
								<div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
									{advertiseData.map((product) => (
										<SingleAdvertise key={product._id} product={product} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Advertise;
