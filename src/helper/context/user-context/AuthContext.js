import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});
	const [user, setUser] = useState({});

	useEffect(() => {
		localStorage.setItem('user', user);
	}, []);

	return (
		<AuthContext.Provider
			value={{
				auth,
				setAuth,
				user,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
