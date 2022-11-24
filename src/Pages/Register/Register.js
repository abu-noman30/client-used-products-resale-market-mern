import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import * as FAIcons from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Register = () => {
	const { methodCreateUser, methodUpdateProfile, methodSignOut } = useContext(FbaseAuthContext);
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const handlerOnSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const fullname = form.fullname.value;
		const email = form.email.value;
		const password = form.password.value;
		const accountType = form.accountType.value;
		console.log(fullname, email, password, accountType);

		if (fullname && email && password && accountType) {
			// Firebase Auth methods---------------------
			methodCreateUser(email, password)
				.then((userCredential) => {
					// Signed in user
					const user = userCredential.user;
					// Signout user for firebase default behavior of auto login after signup termianted
					form.reset();
					console.log(user);
					handlerOnLogout();
					//  for updating user profile---------
					handlerUpdateProfile(fullname);
					// for adding user to database
					saveUsersToDatabase(fullname, email, accountType);

					// ...
				})
				.catch((error) => {
					const errorMessage = error.message;
					setError(errorMessage);
					console.error(error);
					// ..
				});
		}
	};
	const saveUsersToDatabase = async (userName, userEmail, accountType) => {
		console.log(userEmail, userName, accountType);
		const usersData = {
			name: userName,
			email: userEmail,
			accountType: accountType
		};
		try {
			const res = await fetch('http://localhost:5000/users', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(usersData)
			});
			const data = await res.json();
			console.log(data);
			if (data) {
				toast.success('Your account has been created successfully. ');
				navigate('/login');
			}
		} catch (error) {
			console.log(error);
		}
	};
	// Email & Password Validation
	const handlerOnEmail = (e) => {
		const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

		if (!emailRegEx.test(e.target.value)) {
			setError('Please enter a valid email address');
			return;
		}
		setError('');
	};

	const handlerOnPassword = (e) => {
		if (!/(?=.*[A-Z])/.test(e.target.value)) {
			setError('Password should contain at least one upper case');
			return;
		} else {
			setError('');
		}
		if (!/(?=.*[a-z])/.test(e.target.value)) {
			setError('Password should contain at least one lower case');
			return;
		} else {
			setError('');
		}
		if (!/(?=.*?[0-9])/.test(e.target.value)) {
			setError('Password should contain at least one digit');
			return;
		} else {
			setError('');
		}
		if (!/(?=.*?[!@#$&*~])/.test(e.target.value)) {
			setError('Password should contain at least one Special character');
			return;
		} else {
			setError('');
		}
		if (!/.{8,}/.test(e.target.value)) {
			setError('Password Must be at least 8 characters in length');
			return;
		} else {
			setError('');
		}
		setError('');
	};

	// User logout
	const handlerOnLogout = () => {
		methodSignOut()
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};

	//  for updating the user profile
	const handlerUpdateProfile = (fullname, photourl) => {
		methodUpdateProfile(fullname, photourl)
			.then(() => {
				// Update successful
				// ...
			})
			.catch((error) => {
				// An error occurred
				// ...
			});
	};
	return (
		<>
			{/* Register Container */}
			<div className='register-container flex items-center justify-center h-screen'>
				<div className='flex flex-col w-full max-w-sm px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
					<div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>Register Your Account</div>
					<div className='flex gap-4 item-center'></div>
					<div className='mt-8'>
						<form
							onSubmit={(e) => {
								handlerOnSubmit(e);
							}}
						>
							<div className='flex flex-col mb-2'>
								<div className='flex relative '>
									<span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
										<FAIcons.FaUserEdit />
									</span>
									<input
										type='text'
										name='fullname'
										className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='Your Full Name'
										required
									/>
								</div>
							</div>
							<div className='flex flex-col mb-2'>
								<div className='flex relative '>
									<span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
										<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
											<path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
										</svg>
									</span>
									<input
										type='text'
										name='email'
										className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='Your email'
										required
										onChange={(e) => {
											handlerOnEmail(e);
										}}
									/>
								</div>
							</div>
							<div className='flex flex-col mb-2'>
								<div className='flex relative '>
									<span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
										<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
											<path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
										</svg>
									</span>
									<input
										type='password'
										name='password'
										className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										placeholder='Your Password'
										required
										onChange={(e) => {
											handlerOnPassword(e);
										}}
									/>
								</div>
							</div>
							<div className='flex flex-col mb-6'>
								<div className='flex relative '>
									<select
										className='block w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500'
										name='accountType'
										defaultValue='user'
										required
									>
										<option value='user'>"BUYER"</option>
										<option value='seller'>"SELLER"</option>
									</select>
								</div>
							</div>
							<div className='flex items-center mb-6 -mt-4'>
								<div className='flex items-center justify-center mt-2'>
									<p className='text-red-600 font-semibold text-center'>{error}</p>
								</div>
							</div>
							<div className='flex w-full'>
								<button
									type='submit'
									className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
								>
									Register
								</button>
							</div>
						</form>
					</div>
					<div className='flex items-center justify-center mt-6'>
						<Link to='/login' className='inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white'>
							<span className='ml-2'>Allready have an account?</span>
							<span className='underline text-blue-700 ml-2'> Login</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
