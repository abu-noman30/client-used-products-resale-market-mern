import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Other/Spinner/Spinner';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const PrivateRouter = ({ children }) => {
	const { loading, currentUser } = useContext(FbaseAuthContext);

	const location = useLocation();
	// console.log(location);

	if (loading) {
		return (
			// Spinner component
			<Spinner />
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
