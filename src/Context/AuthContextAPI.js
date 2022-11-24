import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

// export FbaseAuthContext for access--------
const FbaseAuthContext = createContext();
const auth = getAuth(app);

const AuthContextAPI = ({ children }) => {
	const [currentUser, setCurrentUser] = useState('');
	const [loading, setLoading] = useState(true);

	//  Register User with email and password
	const methodCreateUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Sign In Method with email and password
	const methodSignIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Sign Out Method
	const methodSignOut = () => {
		setLoading(true);
		return auth.signOut(auth);
	};

	//  Update Profile Method
	const methodUpdateProfile = (name) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name
		});
	};

	// Google Sign In Method
	const googleProvider = new GoogleAuthProvider();

	const methodGoogleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// onAuthStateChanged Method for checking user is logged in or not
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
				setLoading(false);
			} else {
				setCurrentUser('');
				setLoading(false);
			}
		});
		return () => {
			// cleanup
			unsubscribe();
		};
	}, []);

	const authMethods = {
		currentUser,
		loading,
		methodCreateUser,
		methodSignIn,
		methodSignOut,
		methodUpdateProfile,
		methodGoogleSignIn
	};
	return (
		<>
			<FbaseAuthContext.Provider value={authMethods}>{children}</FbaseAuthContext.Provider>
		</>
	);
};

export { FbaseAuthContext };
export default AuthContextAPI;
