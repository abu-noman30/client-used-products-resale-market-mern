import { useEffect, useState } from 'react';

const UserRoleCheck = (email) => {
	const [userRole, setUserRole] = useState('');
	const [userRoleLoading, setUserRoleLoading] = useState(true);
	useEffect(() => {
		if (email) {
			const fetchAPI = async () => {
				try {
					const res = await fetch(`http://localhost:5000/users?email=${email}`);
					const data = await res.json();
					console.log(data);
					setUserRole(data.role);
					setUserRoleLoading(false);
				} catch (error) {
					console.error(error.stack);
				}
			};
			fetchAPI();
		}
	}, [email]);

	return [userRole, userRoleLoading];
};

export default UserRoleCheck;
