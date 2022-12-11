import { useContext } from 'react';

import { AuthContext } from '../../helper/context/user-context/AuthContext';

export const useAuth = () => {
	return useContext(AuthContext);
};
