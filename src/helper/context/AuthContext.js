import { createContext, useState } from 'react';
import React from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});
	const [user, setUser] = useState({});

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
