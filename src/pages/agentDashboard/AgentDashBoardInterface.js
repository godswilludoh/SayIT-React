import React, { useState, useEffect } from 'react';
import { DateTime } from '../../helper/date-time/DateTime';
import { Link } from 'react-router-dom';
import AgentDashboardTable from './AgentDashboardTable';
import style from '../agentDashboard/AgentDashBoardTable.module.css';
import { AgentReportServices } from '../../helper/context/agent-context/agentreport.service';
import axios from '../../utility/api/axios';

const GET_REGISTERED_USERS = ' /v1/reporter';

const AgentDashBoardInterface = () => {
	const [specificAgencyReport, setSpecificAgencyReport] = useState([]);
	const [registeredUsers, setRegisteredUsers] = useState([]);

	useEffect(() => {
		AgentReportServices.loadSpecificAgentReport().then((response) => {
			setSpecificAgencyReport(response.data);
		});
	}, []);

	useEffect(() => {
		const getRegisteredUsers = async () => {
			try {
				let response = await axios.get(GET_REGISTERED_USERS);
				setRegisteredUsers(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getRegisteredUsers();
	}, []);

	const agentObj = JSON.parse(localStorage.getItem('agentObj'));
	console.log(agentObj);

	return (
		<section className='dashboard-interface' id='theSecondSideOfThePage'>
			<div className='top'>
				<div className='info-display'>
					<p className='text-display' />
				</div>
				<div className='time'>
					<DateTime></DateTime>
				</div>
				<div className='forTheprofileImage'>
					<div id='profile-container'>
						<img id='profileImage' src='/assets/newUser.png' />
					</div>
					<input
						id='imageUpload'
						className='profileImageInputField'
						type='file'
						name='profile_photo'
						placeholder='Photo'
						required
						capture
					/>
				</div>
			</div>
			<div className='dashboard-container'>
				<h2 className='registeredAgencyName'>
					🖐 Welcome {agentObj.agency.name}
				</h2>

				<section className='metricCardContainer'>
					<div className='coverForEachCard'>
						<div className='forCardWrapper'>
							<p className='cardWording'>Total Report Submitted</p>
						</div>
						<div className='theMetricItself'>{specificAgencyReport.length}</div>
					</div>
					<div className='coverForEachCard'>
						<div className='forCardWrapper'>
							<p className='cardWording'>Open Complaints</p>
						</div>
						<div className='theMetricItself openComplaint'>0</div>
					</div>
					<div className='coverForEachCard'>
						<div className='forCardWrapper'>
							<p className='cardWording'>Resolved Complaints</p>
						</div>
						<div className='theMetricItself'>0</div>
					</div>
					<div className='forTheNotification_Report'>
						<div className={style.forNotificationButton}>
							<Link to={'/agentNotificationPage'} id='messageLink'>
								Notifications
							</Link>
						</div>
					</div>
				</section>

				<AgentDashboardTable />
			</div>
		</section>
	);
};

export default AgentDashBoardInterface;
