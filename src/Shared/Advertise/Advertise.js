import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import SkeletonLoader from '../../Components/Other/SkeletonLoader/SkeletonLoader';
import SingleAdvertise from '../../Components/SingleAdvertise/SingleAdvertise';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Advertise = () => {
	const [advertiseData, setAdvertiseData] = useState([]);
	const { loading } = useContext(FbaseAuthContext);

	useEffect(() => {
		const fetchAPI = async () => {
			const res = await axios.get('https://server-used-car-bazar-mern.vercel.app/advertise', {
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('jwtToken')}`
				}
			});
			setAdvertiseData(res.data);
			console.log(res.data);
		};
		fetchAPI();
	}, []);

	// console.log(advertiseData);
	return (
		<>
			{/* Advertise Container */}
			{advertiseData.length > 0 && (
				<div className='advertise-container w-11/12 mx-auto mb-20'>
					<div className='advertise-title'>
						<div className='relative mx-auto w-full bg-gray-200'>
							<div className='mx-auto max-w-sm sm:max-w-2xl lg:max-w-none py-5 px-4 w-full'>
								{/* :TITLE */}
								<div className='flex items-center my-10'>
									<div className='flex flex-col justify-center items-center bg-cover bg-clip-text bg-center uppercase text-transparent text-xl lg:text-5xl font-extrabold tracking-wide antialiased bg-[url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)] '>
										New Collections
									</div>
									<span className='ml-3 w-1/4 h-0.5 bg-gray-400' />
								</div>

								{/* :PRODUCT SUGGESTION */}
								{loading ? (
									<SkeletonLoader />
								) : (
									<div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
										{advertiseData.map((add) => (
											<SingleAdvertise key={add.product._id} add={add} />
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Advertise;
