import { useEffect, useState } from 'react';

const useRole = (userEmail) => {
	const [userRole, setUserRole] = useState('');
	const [userRoleLoading, setUserRoleLoading] = useState(true);
	useEffect(() => {
		if (userEmail) {
			const fetchAPI = async () => {
				try {
					const res = await fetch(`https://server-used-car-bazar-mern.vercel.app/users/role?email=${userEmail}`);
					const data = await res.json();
					// console.log(data);
					setUserRole(data.accountType);
					setUserRoleLoading(false);
				} catch (error) {
					console.error(error.stack);
				}
			};
			fetchAPI();
		}
	}, [userEmail]);

	return [userRole, userRoleLoading];
};

export default useRole;
