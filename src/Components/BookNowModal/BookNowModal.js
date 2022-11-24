import React, { useContext } from 'react';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const BookNowModal = (props) => {
	const { currentUser } = useContext(FbaseAuthContext);
	const { bookNowModalData, setBookNowModalData } = props;
	const {
		car_name,
		price: { resale_price }
	} = bookNowModalData;
	console.log(bookNowModalData);

	const handlerOnSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const fullname = form.fullname.value;
		const email = form.email.value;
		const phoneNumber = form.phoneNumber.value;
		const carModel = form.carModel.value;
		const price = form.price.value;
		const meetingPlace = form.meetingPlace.value;
		console.log(fullname, email, phoneNumber, carModel, price, meetingPlace);
	};

	return (
		<>
			{/* Modal Container */}
			<input type='checkbox' id='book-now-modal' className='modal-toggle' />
			<div className='modal '>
				<div className='modal-box relative rounded shadow-2xl '>
					<div className=' p-8 border shadow-inner shadow-red-200'>
						<label htmlFor='book-now-modal' className='btn btn-sm bg-red-800 hover:bg-red-700 absolute right-2 top-2' onClick={() => setBookNowModalData(null)}>
							✕
						</label>
						{/* <h3 className='text-lg font-bold underline underline-offset-2 italic'>Enter Your Email:</h3> */}
						{/* <p className='text-red-600 font-semibold text-center py-4'>error</p> */}
						<div className='flex flex-col mb-5'>
							<div className='add-reviews-container col-span-12 md:col-span-6 lg:col-span-4 lg:mr-8 '>
								{/* Review-form */}

								<div className='w-full p-4'>
									<div className='bg-gray-100 relative rounded-lg p-8 sm:p-12 shadow-lg'>
										<form
											onSubmit={(e) => {
												handlerOnSubmit(e);
											}}
										>
											<div className='grid gap-6 mb-6'>
												<div>
													<label className='block mb-2 text-sm font-medium text-gray-900 '>Full Name</label>
													<input
														type='text'
														name='fullname'
														className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
														required
														defaultValue={currentUser.displayName}
														disabled
													/>
												</div>
												<div>
													<label className='block mb-2 text-sm font-medium text-gray-900 '>Email address</label>
													<input
														type='email'
														name='email'
														className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
														defaultValue={currentUser.email}
														disabled
														required
													/>
												</div>
												<div>
													<label className='block mb-2 text-sm font-medium text-gray-900'>Phone number</label>
													<input
														name='phoneNumber'
														className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
														placeholder='123-45-678'
														required
													/>
												</div>
												<div>
													<label className='block mb-2 text-sm font-medium text-gray-900 '>Car Model</label>
													<input
														type='text'
														name='carModel'
														className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
														placeholder='Car Model'
														defaultValue={car_name}
														disabled
														required
													/>
												</div>
												<div>
													<label className='block mb-2 text-sm font-medium text-gray-900 '>Price $</label>
													<input
														type='text'
														name='price'
														className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
														placeholder='Price'
														defaultValue={resale_price}
														disabled
														required
													/>
												</div>
												<div>
													<label className='block mb-2 text-sm font-medium text-gray-900 '>Meeting Place</label>
													<input
														name='meetingPlace'
														className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
														placeholder='Your Prefarable Meeting Place'
														required
													/>
												</div>
											</div>

											<button
												type='submit'
												className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>

						{/* <div className='modal-action'>
							<label
								htmlFor='my-modal-3'
								className='py-2 px-6 rounded bg-blue-700 hover:bg-blue-600 text-white border-blue-800 mx-1'
								onClick={() => {
									handlerResetPassword();
								}}
							>
								Confirm
							</label>
						</div> */}
					</div>
				</div>
			</div>
			{/* ------------- */}
		</>
	);
};

export default BookNowModal;
