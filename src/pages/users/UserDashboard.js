import React, { useState, useEffect } from 'react';
import SidebarUser from '../../components/sidebar/SidebarUser';
import { useAuth } from '../../components/hooks/useAuth';
import './UserDashboard.css';
import { UserTable } from './userdashboardPages/UserTable';
import { UserCards } from './userdashboardPages/UserCards';
import { UserTop } from './userdashboardPages/UserTop';
import axios from '../../utility/api/axios';

const REGISTERED_USER_REPORT_URL = '/v1/reports/user/';

const UserDashboard = () => {
	const { user, auth } = useAuth();
	console.log(user);
	const config = {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
		},
	};

	const regUserObj = JSON.parse(localStorage.getItem('regUserObj'));

	const [report, setReport] = useState([]);
	useEffect(() => {
		const getReport = async () => {
			try {
				let response = await axios.get(REGISTERED_USER_REPORT_URL, config);
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
						👋 Welcome <span id='user-username'>{regUserObj.userName}</span>
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
