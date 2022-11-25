import React from 'react';

const DeleteModal = (props) => {
	const { handlerOnConfirmModal, handlerOnCancelModal, modalData } = props;
	return (
		<>
			{/* Delete Seller Confirmation Modal */}
			<input type='checkbox' id='my-modal' className='modal-toggle' />
			<div className='modal '>
				<div className='modal-box rounded shadow-5xl'>
					<div className='p-8 border shadow-inner shadow-red-200 flex items-center flex-col justify-center'>
						<h3 className='font-bold text-3xl text-gray-600 mb-3'>Are you sure?</h3>
						<h3 className=' text-xl text-gray-600 mb-3'>You won't be able to revert this!</h3>
						<div className='modal-action'>
							<label
								htmlFor='my-modal'
								className='inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none '
								onClick={() => {
									handlerOnConfirmModal(modalData._id);
								}}
							>
								Yes, Delete
							</label>
							<label
								htmlFor='my-modal'
								className='inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none '
								onClick={() => {
									handlerOnCancelModal();
								}}
							>
								Cancel
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteModal;
