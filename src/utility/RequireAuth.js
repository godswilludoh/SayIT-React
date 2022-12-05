import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../components/hooks/useAuth';

const RequireAuth = () => {
	const { auth } = useAuth();
	const location = useLocation();

	return auth?.user ? <Outlet /> : <Navigate to='/login' />;
};

export default RequireAuth;
