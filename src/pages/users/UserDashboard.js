import React from 'react';
import SidebarUser from '../../components/sidebar/SidebarUser';
import { useAuth } from '../../components/hooks/useAuth';
import './UserDashboard.css';
import { UserTable } from './userdashboardPages/UserTable';
import { UserCards } from './userdashboardPages/UserCards';
import { UserTop } from './userdashboardPages/UserTop';

const UserDashboard = () => {
	const { user } = useAuth();
	return (
		<div className='userdashboard-container'>
			<SidebarUser />
			<div className='userdashboard-interface'>
				<UserTop />
				<div className='user-dashboard-container'>
					<h2>
						👋 Welcome <span id='user-username'>{user.userName}</span>
					</h2>
					<p className='user-secure'>Your data is safe with us 🔐</p>
					<UserCards />
					<UserTable />
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
