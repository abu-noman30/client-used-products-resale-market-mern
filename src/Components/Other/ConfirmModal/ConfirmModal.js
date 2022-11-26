import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FbaseAuthContext } from '../../../Context/AuthContextAPI';

const ConfirmModal = (props) => {
	const { confirmModal, setConfirmModal } = props;
	const { currentUser } = useContext(FbaseAuthContext);

	const handlerOnConfirmAlertmModal = async (confirmModal) => {
		// console.log('Confirm');
		const itemsInfo = {
			car: confirmModal,
			buyerInfo: {
				name: currentUser.displayName,
				email: currentUser.email
			}
		};
		const res = await fetch('http://localhost:5000/reported-items', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(itemsInfo)
		});
		const data = await res.json();
		// console.log(data);
		if (data.acknowledged === true) {
			toast.success('Item reported successfully');
			setConfirmModal({});
		}
	};
	const handlerOnCancleAlertmModal = () => {
		console.log('Cancel');
		setConfirmModal({});
	};
	return (
		<>
			{/* Confirm Modal Container */}
			<>
				{/* Delete Seller Confirmation Modal */}
				<input type='checkbox' id='confirm-modal' className='modal-toggle' />
				<div className='modal '>
					<div className='modal-box rounded shadow-5xl'>
						<div className='p-8 border shadow-inner shadow-red-200 flex items-center flex-col justify-center'>
							<h3 className='font-bold text-3xl text-gray-600 mb-3'>Are you sure?</h3>
							<h3 className=' text-xl text-gray-600 mb-3'>You want to Report for this Product?</h3>
							<div className='modal-action'>
								<label
									htmlFor='confirm-modal'
									className='inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none '
									onClick={() => {
										handlerOnConfirmAlertmModal(confirmModal);
									}}
								>
									Yes
								</label>
								<label
									htmlFor='confirm-modal'
									className='inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none '
									onClick={() => {
										handlerOnCancleAlertmModal();
									}}
								>
									Cancel
								</label>
							</div>
						</div>
					</div>
				</div>
			</>
		</>
	);
};

export default ConfirmModal;
