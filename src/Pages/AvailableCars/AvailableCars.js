import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from '../../Components/BookNowModal/BookNowModal';
import ConfirmModal from '../../Components/Other/ConfirmModal/ConfirmModal';
import SingleCarCard from '../../Components/SingleCarCard/SingleCarCard';

const AvailableCars = () => {
	const loaderData = useLoaderData();
	const cars = loaderData;
	console.log(loaderData);
	const [bookNowModalData, setBookNowModalData] = useState(null);
	const [confirmModal, setConfirmModal] = useState({});

	return (
		<>
			{/* Available Cars Conainer */}
			<div className='available-cars-container w-11/12 mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{cars.map((car) => (
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
