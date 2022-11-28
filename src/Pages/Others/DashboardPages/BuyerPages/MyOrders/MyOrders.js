import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import DeleteModal from '../../../../../Components/Other/DeleteModal/DeleteModal';
import Spinner from '../../../../../Components/Other/Spinner/Spinner';
import { FbaseAuthContext } from '../../../../../Context/AuthContextAPI';

const MyOrders = () => {
	const { currentUser } = useContext(FbaseAuthContext);
	const [modalData, setModalData] = useState({});

	const {
		data: orders = [],
		isLoading,
		refetch
	} = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await fetch(`https://server-used-car-bazar-mern.vercel.app/booking?email=${currentUser.email}`, {
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('jwtToken')}`
				}
			});
			const data = await res.json();
			return data;
		}
	});
	// console.log(orders);
	if (isLoading) {
		return <Spinner />;
	}

	const handlerOnConfirmModal = async (id) => {
		console.log('Confirm', id);
		try {
			const res = await fetch(`https://server-used-car-bazar-mern.vercel.app/booking/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('jwtToken')}`
				}
			});
			const data = await res.json();
			console.log(data);
			if (data.deletedCount > 0) {
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
	return (
		<>
			{/* My Orders Container */}
			<div className='my-orders-container'>
				<div className=''>
					<h2 className='font-semibold text-3xl text-gray-600 underline underline-offset-2 mb-12 mt-2 text-center '>MY ORDERS</h2>
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
										Price
									</th>
									<th scope='col' className='py-3 px-2 text-center'>
										BUYER
									</th>
									<th scope='col' className='py-3 px-2 text-start'>
										MEETING LOCATION
									</th>
									<th scope='col' className='py-3 px-2 text-start'>
										Payment Status
									</th>
									<th scope='col' className='py-3 px-2 text-start'>
										Checkout
									</th>
									<th scope='col' className='py-3 px-2 text-start'>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order, index) => (
									<tr className='bg-white border-b hover:bg-gray-50 ' key={order._id}>
										<th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'>
											{index + 1}
										</th>
										<td className='py-1 px-1'>
											<div className='avatar'>
												<div className='w-20 rounded'>
													<img src={order?.carInfo?.image} alt='Tailwind-CSS-Avatar-component' className='' />
												</div>
											</div>
										</td>
										<td className='py-4 px-2'>{order?.carInfo?.carModel}</td>
										<td className='py-4 px-2'>${order?.carInfo?.price}</td>
										<td className='py-4 px-2 bg-gray-100  text-black text-center'>
											<p>{order?.buyerInfo?.buyerName}</p>
											<p>{order?.buyerInfo?.email}</p>
											<p>{order?.buyerInfo?.phoneNumber}</p>
										</td>
										<td className='py-4 px-2'>{order?.meetingPlace}</td>
										<td className='py-4 px-2'>
											{order?.paymentStatus === 'pending' && <div className='badge badge-warning'>Unpaid</div>}
											{order?.paymentStatus === 'paid' && <div className='badge badge-warning'>Paid</div>}
										</td>
										<td className='py-4 px-2'>
											{order?.paymentStatus === 'pending' ? (
												<Link to={`/dashboard/my-orders/payment/${order._id}`}>
													<button className='btn btn-xs btn-primary'> pay</button>
												</Link>
											) : (
												<button className='btn btn-xs btn-primary' disabled>
													pay
												</button>
											)}
										</td>
										<td className='py-4 px-2'>
											<label
												htmlFor='my-modal'
												className='btn bg-red-800 hover:bg-red-900 btn-xs'
												onClick={() => {
													setModalData(order);
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

export default MyOrders;
