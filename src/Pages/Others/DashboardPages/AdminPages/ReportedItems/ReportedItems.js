import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../../../../Components/Other/DeleteModal/DeleteModal';
import Spinner from '../../../../../Components/Other/Spinner/Spinner';

const ReportedItems = () => {
	// const { currentUser } = useContext(FbaseAuthContext);
	const [modalData, setModalData] = useState({});

	const {
		data: reportedItems = [],
		isLoading,
		refetch
	} = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await fetch('https://server-used-car-bazar-mern.vercel.app/reported-items', {
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('jwtToken')}`
				}
			});
			const data = await res.json();
			return data;
		}
	});
	// console.log(reportedItems);
	if (isLoading) {
		return <Spinner />;
	}

	const handlerOnConfirmModal = async (id) => {
		console.log('Confirm', id);
		try {
			const res = await fetch(`https://server-used-car-bazar-mern.vercel.app/reported-items/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('jwtToken')}`
				}
			});
			const data = await res.json();
			console.log(data.deleteItemReport);
			if (data.deleteItemReport.deletedCount > 0) {
				toast.success('Order deleted successfully');
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
	// console.log('repotedItems', reportedItems);
	return (
		<>
			{/* Reported Items Container */}
			<div className='reported-items-container'>
				<div className=''>
					<h2 className='font-semibold text-3xl text-gray-600 underline underline-offset-2 mb-12 mt-2 text-center '>REPORTED ITEMS</h2>
					<div className='overflow-x-auto relative shadow-lg sm:rounded-lg'>
						<table className='w-full text-sm text-left text-gray-500 bg-white'>
							<thead className='text-xs text-gray-700 uppercase bg-gray-200 '>
								<tr>
									<th scope='col' className='py-3 px-2 text-start'></th>
									<th scope='col' className='py-3 px-2 text-start'></th>
									<th scope='col' className='py-3 px-2 text-start'>
										MODEL
									</th>
									<th scope='col' className='py-3 px-2 text-start'>
										Orginal Price
									</th>
									<th scope='col' className='py-3 px-2 text-start'>
										Re-Sale Price
									</th>
									<th scope='col' className='py-3 px-2 text-center'>
										Seller
									</th>
									<th scope='col' className='py-3 px-2 text-center'>
										Buyer
									</th>
									<th scope='col' className='py-3 px-2 text-start'>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{reportedItems.map((item, index) => (
									<tr className='bg-white border-b hover:bg-gray-50 ' key={item._id}>
										<th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'>
											{index + 1}
										</th>
										<td className='py-1 px-1'>
											<div className='avatar'>
												<div className='w-20 rounded'>
													<img src={item?.car?.image} alt='Tailwind-CSS-Avatar-component' className='' />
												</div>
											</div>
										</td>
										<td className='py-4 px-2'>{item?.car?.car_name}</td>
										<td className='py-4 px-2'>
											<p>${item?.car?.price?.original_price}</p>
										</td>
										<td className='py-4 px-2'>
											<p>${item?.car?.price?.resale_price}</p>
										</td>
										<td className='py-4 px-2 bg-gray-100 text-center'>
											<p>{item?.car?.seller_info?.name}</p>
											<p>{item?.car?.seller_info?.email}</p>
											<p>{item?.car?.seller_info?.phone}</p>
										</td>
										<td className='py-4 px-2 bg-gray-100 text-center'>
											<p>{item?.buyerInfo?.name}</p>
											<p>{item?.buyerInfo?.email}</p>
										</td>
										<td className='py-4 px-2'>
											<label
												htmlFor='my-modal'
												className='btn bg-red-800 hover:bg-red-900 btn-xs'
												onClick={() => {
													setModalData(item);
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

export default ReportedItems;
