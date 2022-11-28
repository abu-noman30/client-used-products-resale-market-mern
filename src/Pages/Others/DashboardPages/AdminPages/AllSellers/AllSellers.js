import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../../../../Components/Other/DeleteModal/DeleteModal';
import Spinner from '../../../../../Components/Other/Spinner/Spinner';

const AllSellers = () => {
	const [modalData, setModalData] = useState({});

	const {
		data: sellers = [],
		isLoading,
		refetch
	} = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await fetch('https://server-used-car-bazar-mern.vercel.app/users');
			const data = await res.json();
			return data.sellersData;
		}
	});
	// console.log(sellers);
	if (isLoading) {
		return <Spinner />;
	}
	const handlerOnUpdateVerification = async (id) => {
		const verificationType = {
			verification: 'verified'
		};
		console.log(verificationType);
		const res = await fetch(`https://server-used-car-bazar-mern.vercel.app/users/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('jwtToken')}`
			},
			body: JSON.stringify(verificationType)
		});
		const data = await res.json();
		if (data.modifiedCount === 1) {
			toast.success('Seller verification updated successfully');
			refetch();
		}
	};

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
				toast.success('Seller Account deleted successfully');
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
			{/* All Sellers Container */}
			<div className='all-sellers-container rounded-lg '>
				<div className=''>
					<h2 className='font-semibold text-3xl text-gray-600 underline underline-offset-2 mb-12 mt-2 text-center '>All SELLERS</h2>

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
										Verification Status
									</th>
									<th scope='col' className='py-3 px-6'>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{sellers.map((seller, index) => (
									<tr className='bg-white border-b hover:bg-gray-50 ' key={seller._id}>
										<th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
											{index + 1}
										</th>
										<td className='py-4 px-6'>{seller.name}</td>
										<td className='py-4 px-6'>{seller.email}</td>
										<td className='py-4 px-6 text-black font-bold bg-gray-50'>{seller.accountType === 'seller' && 'SELLER'}</td>
										<td className='py-4 px-6'>
											{seller?.verification === 'verified' ? (
												<button className='btn btn-success btn-xs border-gray-200'>Verified</button>
											) : (
												<button
													className='btn btn-warning border-gray-200 btn-xs'
													onClick={(e) => {
														handlerOnUpdateVerification(seller._id);
													}}
												>
													Pending
												</button>
											)}
										</td>
										<td className='py-4 px-6 flex items-center justify-start'>
											<label
												htmlFor='my-modal'
												className='btn bg-red-800 hover:bg-red-900 btn-xs'
												onClick={() => {
													setModalData(seller);
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

export default AllSellers;
