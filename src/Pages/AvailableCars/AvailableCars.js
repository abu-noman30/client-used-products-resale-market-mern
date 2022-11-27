import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookNowModal from '../../Components/BookNowModal/BookNowModal';
import ConfirmModal from '../../Components/Other/ConfirmModal/ConfirmModal';
import SingleCarCard from '../../Components/SingleCarCard/SingleCarCard';
import ClockLoader from 'react-spinners/ClockLoader';

const AvailableCars = () => {
	const loaderData = useLoaderData();
	const cars = loaderData;
	const [bookNowModalData, setBookNowModalData] = useState(null);
	const [confirmModal, setConfirmModal] = useState({});
	const navigation = useNavigation();
	console.log(navigation);

	if (navigation.state === 'loading') {
		return (
			// Spinner component
			<div className='w-1/2 mx-auto h-[26rem] my-auto flex items-center justify-center'>
				<span className=''>
					<ClockLoader color='#777777' />
				</span>
			</div>
		);
	}

	const availableCars = cars.filter((availableCar) => {
		return availableCar?.sales_status !== 'sold';
	});

	// console.log('available cars', availableCars);

	return (
		<>
			{/* Available Cars Conainer */}
			<div className='available-cars-container w-11/12 mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{availableCars.map((car) => (
						<SingleCarCard key={car._id} setBookNowModalData={setBookNowModalData} car={car} setConfirmModal={setConfirmModal} />
					))}
				</div>
			</div>
			{/* Book Now Modal Container */}
			<div className='book-now-modal-container'>{bookNowModalData && <BookNowModal bookNowModalData={bookNowModalData} setBookNowModalData={setBookNowModalData} />}</div>
			{/* Modal - Body Container */}
			{confirmModal && (
				<div className='confirm-modal-container'>
					<ConfirmModal confirmModal={confirmModal} setConfirmModal={setConfirmModal} />
				</div>
			)}
		</>
	);
};

export default AvailableCars;
