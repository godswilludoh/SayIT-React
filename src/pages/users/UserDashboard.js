import React, { useState, useEffect } from 'react';
import SidebarUser from '../../components/sidebar/SidebarUser';
import { useAuth } from '../../components/hooks/useAuth';
import './UserDashboard.css';
import { UserTable } from './userdashboardPages/UserTable';
import { UserCards } from './userdashboardPages/UserCards';
import { UserTop } from './userdashboardPages/UserTop';
import axios from 'axios';

const UserDashboard = () => {
	const { user, auth } = useAuth();
	console.log(user);
	const config = {
		headers: {
			Authorization: `Bearer ${auth?.accessToken}`,
		},
	};
	console.log(config);

	const [report, setReport] = useState([]);
	useEffect(() => {
		// if (localStorage.getItem('accessToken')) {

		// }
		const getReport = async () => {
			try {
				let response = await axios.get(
					'https://say--it.herokuapp.com/v1/reports/user',
					config
				);
				setReport(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getReport();
	}, [auth.accessToken]);
	return (
		<div className='userdashboard-container'>
			<SidebarUser />
			<div className='userdashboard-interface'>
				<UserTop />
				<div className='user-dashboard-container'>
					<h2 className='user-welcome'>
						👋 Welcome <span id='user-username'>{user.userName}</span>
					</h2>
					<p className='user-secure'>Your data is safe with us 🔐</p>
					<UserCards reports={report} />
					<UserTable reports={report} />
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
