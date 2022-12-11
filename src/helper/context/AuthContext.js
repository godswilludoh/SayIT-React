import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});
	const [user, setUser] = useState({});
	const [render, setRender] = useState(false);

	// useEffect(() => {
	// 	const access = JSON.parse(localStorage.getItem('accessToken'));
	// 	if (access) {
	// 		setAuth({ ...auth, accessToken: access });
	// 	}
	// }, []);

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
				render,
				setRender,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
