import React from 'react';
import SidebarUser from '../../../../components/sidebar/SidebarUser';
import './MakeReport.css';
import MakeReportTop from './MakeReportTop';
import UserFormik from './UserFormik';

export const MakeReportForm = () => {
	return (
		<div className='makereport-container'>
			<SidebarUser />
			<div className='makereportform-container'>
				<div className='makereport-top'>
					<MakeReportTop
						classname='makereport-title'
						title='Make Report'
						classname2='main-makereport-welcome'
						welcome='👋🏼 Welcome!'
					/>
				</div>
				<UserFormik />
			</div>
		</div>
	);
};
