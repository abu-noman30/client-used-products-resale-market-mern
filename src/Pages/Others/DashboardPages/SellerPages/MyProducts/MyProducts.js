import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../../../../Components/Other/DeleteModal/DeleteModal';
import { FbaseAuthContext } from '../../../../../Context/AuthContextAPI';

const MyProducts = () => {
	const { currentUser } = useContext(FbaseAuthContext);
	const [modalData, setModalData] = useState({});

	const { data: products = [], refetch } = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await fetch(`http://localhost:5000/products?email=${currentUser.email}`);
			const data = await res.json();
			return data;
		}
	});
	console.log(products);

	const handlerOnConfirmModal = async (id) => {
		console.log('Confirm', id);
		try {
			const res = await fetch(`http://localhost:5000/products/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('jwtToken')}`
				}
			});
			const data = await res.json();
			console.log(data);
			if (data.deletedCount > 0) {
				toast.success('Product deleted successfully');
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

	const handlerOnAdvertiseProduct = async (product) => {
		// console.log('Advertise', product);
		const productData = {
			product: product
		};
		const res = await fetch('http://localhost:5000/advertise', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('jwtToken')}`
			},
			body: JSON.stringify(productData)
		});
		const data = await res.json();
		console.log(data);
		if (data.insertedId) {
			toast.success('Product Added for advertise successfully');
			refetch();
		} else {
			toast.error('Product already added for advertise');
			refetch();
		}
	};
	return (
		<>
			{/* My Products Container */}
			<div className='my-products-container'>
				<div className=''>
					<h2 className='font-semibold text-3xl text-gray-600 underline underline-offset-2 mb-12 mt-2 text-center'>MY ADDED PRODUCTS</h2>

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
										Sale Status
									</th>
									<th scope='col' className='py-3 px-2 text-start'>
										Advertise
									</th>
									<th scope='col' className='py-3 px-2 text-start'>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{products.map((product, index) => (
									<tr className='bg-white border-b hover:bg-gray-50 ' key={product._id}>
										<th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
											{index + 1}
										</th>
										<td className='py-1 px-1'>
											<div className='avatar'>
												<div className='w-20 rounded'>
													<img src={product?.image} alt='Tailwind-CSS-Avatar-component' className='' />
												</div>
											</div>
										</td>
										<td className='py-4 px-2'>{product?.car_name}</td>
										<td className='py-4 px-2'>{product?.price?.resale_price}</td>
										<td className='py-4 px-2 bg-gray-100 font-bold text-black text-center'>
											{product?.sales_status === 'sold' ? <div className='badge badge-success'>SOLD</div> : <div className='badge badge-warning'>AVAILABLE</div>}
										</td>
										<td className='py-4 px-2'>
											{product?.sales_status === 'sold' ? (
												<button className='btn btn-xs' disabled>
													advertise
												</button>
											) : (
												<button
													className='btn btn-xs btn-primary'
													onClick={() => {
														handlerOnAdvertiseProduct(product);
													}}
												>
													advertise
												</button>
											)}
										</td>
										<td className='py-4 px-2'>
											<label
												htmlFor='my-modal'
												className='btn bg-red-800 hover:bg-red-900 btn-xs'
												onClick={() => {
													setModalData(product);
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

export default MyProducts;
