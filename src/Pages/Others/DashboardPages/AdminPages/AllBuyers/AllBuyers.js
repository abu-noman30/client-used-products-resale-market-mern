import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../../../../Components/Other/DeleteModal/DeleteModal';
import Spinner from '../../../../../Components/Other/Spinner/Spinner';

const AllBuyers = () => {
	const [modalData, setModalData] = useState({});

	const {
		data: buyers = [],
		isLoading,
		refetch
	} = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await fetch('https://server-used-car-bazar-mern.vercel.app/users', {
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('jwtToken')}`
				}
			});
			const data = await res.json();
			return data.buyersData;
		}
	});
	// console.log(buyers);
	if (isLoading) {
		return <Spinner />;
	}

	const handlerOnConfirmModal = async (id) => {
		// console.log('Confirm', id);
		try {
			const res = await fetch(`https://server-used-car-bazar-mern.vercel.app/users/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('jwtToken')}`
				}
			});
			const data = await res.json();
			console.log(data);
			if (data.deletedCount > 0) {
				toast.success('Buyer Account deleted successfully');
				refetch();
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handlerOnCancelModal = () => {
		console.log('Cancel');
		setModalData({});
	};
	return (
		<>
			{/* All Buyers Container */}
			<div className='all-buyers-container'>
				<div className=''>
					<h2 className='font-semibold text-3xl text-gray-600 underline underline-offset-2 mb-12 mt-2 text-center '>All BUYERS</h2>
					<div className='overflow-x-auto relative shadow-lg sm:rounded-lg'>
						<table className='w-full text-sm text-left text-gray-500 bg-white'>
							<thead className='text-xs text-gray-700 uppercase bg-gray-200 '>
								<tr>
									<th scope='col' className='py-3 px-6'></th>
									<th scope='col' className='py-3 px-6'>
										Name
									</th>
									<th scope='col' className='py-3 px-6'>
										Email
									</th>
									<th scope='col' className='py-3 px-6'>
										Account Type
									</th>
									<th scope='col' className='py-3 px-6'>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{buyers.map((buyer, index) => (
									<tr className='bg-white border-b hover:bg-gray-50 ' key={buyer._id}>
										<th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
											{index + 1}
										</th>
										<td className='py-4 px-6'>{buyer.name}</td>
										<td className='py-4 px-6'>{buyer.email}</td>
										<td className='py-4 px-6 bg-gray-100 font-bold text-black'>{buyer.accountType === 'buyer' && 'BUYER'}</td>
										<td className='py-4 px-6 flex items-center justify-start'>
											<label
												htmlFor='my-modal'
												className='btn bg-red-800 hover:bg-red-900 btn-xs'
												onClick={() => {
													setModalData(buyer);
												}}
											>
												DELETE
											</label>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{/* Modal - Body Container */}
			{modalData && (
				<div className='modal-container'>
					<DeleteModal handlerOnConfirmModal={handlerOnConfirmModal} handlerOnCancelModal={handlerOnCancelModal} modalData={modalData} />
				</div>
			)}
		</>
	);
};

export default AllBuyers;
