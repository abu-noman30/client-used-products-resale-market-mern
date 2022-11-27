import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ClockLoader from 'react-spinners/ClockLoader';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const PrivateRouter = ({ children }) => {
	const { loading, currentUser } = useContext(FbaseAuthContext);

	const location = useLocation();
	// console.log(location);

	if (loading) {
		return (
			// Spinner component
			<div className='w-1/2 mx-auto h-[26rem] my-auto flex items-center justify-center'>
				<span className=''>
					<ClockLoader color='#777777' />
				</span>
			</div>
		);
	}

	if (currentUser && currentUser.uid) {
		console.log(currentUser);
		return children;
	} else {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}
};

export default PrivateRouter;
