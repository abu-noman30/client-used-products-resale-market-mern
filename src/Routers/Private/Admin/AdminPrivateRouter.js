import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../../Components/Other/Spinner/Spinner';
import { FbaseAuthContext } from '../../../Context/AuthContextAPI';
import useRole from '../../../Hooks/UserRoleCheck/userRole';
// import ClockLoader from 'react-spinners/ClockLoader';

const AdminPrivateRouter = ({ children }) => {
	const { loading, currentUser } = useContext(FbaseAuthContext);
	// const [userRole, userRoleLoading] = useRole(currentUser?.email);
	const [userRole, userRoleLoading] = useRole(currentUser?.email);

	const location = useLocation();
	// console.log(location);

	if (loading || userRoleLoading) {
		return (
			// Spinner component
			<Spinner />
		);
	}

	if (currentUser && userRole === 'admin') {
		// console.log(currentUser);
		return children;
	} else {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}
};

export default AdminPrivateRouter;
