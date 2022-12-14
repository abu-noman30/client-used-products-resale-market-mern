import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Login = () => {
	const { setLoading, methodSignIn, methodGoogleSignIn, methodSignOut } = useContext(FbaseAuthContext);
	const [error, setError] = useState('');
	// const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || '/';
	console.log(from);

	const handlerOnSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		// Firebase Auth methods---------------------
		//  for sign in user with email and password
		methodSignIn(email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				form.reset();
				setError('');
				setLoading(false);
				console.log(user);
				// ...
				const authoriseUser = {
					email: user.email,
					uid: user.uid
				};
				fetchJWT(authoriseUser);
				// ...
				if (user && user.uid) {
					if (from === '/' || from === '/home') {
						toast.success('Login Successful');
						navigate('/home');
					} else {
						toast.success('Login Successful');
						navigate(from, { replace: true });
					}
				} else {
					handlerOnLogout();
					setLoading(false);
				}
			})

			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
				setLoading(false);

				console.error(error);
				// ..
			});
	};

	//  for signing in with google------------
	const handlerGoogleSignIn = () => {
		methodGoogleSignIn()
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const user = result.user;

				console.log(user);
				// ...
				// ...
				const authoriseUser = {
					email: user.email,
					uid: user.uid
				};
				fetchJWT(authoriseUser);
				// ...
				if (user && user.uid && user.displayName && user.email) {
					if (from === '/' || from === '/home') {
						toast.success('Login Successful');
						navigate('/home');
						saveUsersToDatabase(user.displayName, user.email);
					} else {
						// toast.success('Login Successful');
						navigate(from, { replace: true });
						saveUsersToDatabase(user.displayName, user.email);
					}
				} else {
					handlerOnLogout();
				}
			})
			.catch((error) => {
				// Handle Errors here.
				const errorMessage = error.message;
				setError(errorMessage);
				console.error(error);
				// ...
			});
	};

	// User logout
	const handlerOnLogout = () => {
		methodSignOut()
			.then(() => {
				// Sign-out successful.
				localStorage.removeItem('jwtToken');
			})
			.catch((error) => {
				// An error happened.
			});
	};
	const saveUsersToDatabase = async (userName, userEmail) => {
		console.log(userEmail, userName);
		const usersData = {
			name: userName,
			email: userEmail,
			accountType: 'buyer'
		};
		try {
			const res = await fetch('https://server-used-car-bazar-mern.vercel.app/users', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(usersData)
			});
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	// Middleware(Authentication)-JWT(Token)

	const fetchJWT = async (authoriseUser) => {
		const res = await fetch('https://server-used-car-bazar-mern.vercel.app/jwt', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(authoriseUser)
		});
		const data = await res.json();
		console.log(data);

		localStorage.setItem('jwtToken', data.accessToken);
		try {
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			{/* Login Container */}
			<div className='login-container flex items-center justify-center pt-10 pb-20'>
				<div className='flex flex-col w-full max-w-sm px-4 py-8 bg-white rounded-lg shadow-2xl shadow-gray-700  sm:px-6 md:px-8 lg:px-10'>
					<div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl '>Login To Your Account</div>
					<div className='flex gap-4 item-center'>
						<button
							type='button'
							className='py-2 px-4 flex justify-center items-center  bg-white hover:bg-gray-50 focus:ring-gray-500 focus:ring-offset-gray-200 text-red-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  border-2 border-gray-800 rounded-lg'
							onClick={() => {
								handlerGoogleSignIn();
							}}
						>
							<svg width='20' height='20' fill='currentColor' className='mr-2' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
								<path d='M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z'></path>
							</svg>
							Google
						</button>
					</div>
					<div className='mt-8'>
						<form
							onSubmit={(e) => {
								handlerOnSubmit(e);
							}}
						>
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
									/>
								</div>
							</div>
							<div className='flex flex-col mb-6'>
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
										placeholder='Your password'
										required
									/>
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
									className='py-2 px-4 hover:bg-red-800 bg-red-700 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  '
								>
									Login
								</button>
							</div>
						</form>
					</div>
					<div className='flex items-center justify-center mt-6'>
						<Link to='/register' className='inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 '>
							<span className='ml-2'>You don&#x27;t have an account?</span> <span className='underline text-blue-700'>Register</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
