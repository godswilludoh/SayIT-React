import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
// import Dashboard from './userdashboardPages/Dashboard';
// import Profile from './userdashboardPages/Profile';
import './UserDashboard.css';

const UserDashboard = () => {
	return (
		<div className='userdashboard-container'>
			<Sidebar />
		</div>
	);
};

export default UserDashboard;
