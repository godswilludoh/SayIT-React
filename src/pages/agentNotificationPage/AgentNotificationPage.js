import React from 'react';

import AgentNotificationComponent from './AgentNotificationComponent';
import '../agentNotificationPage/AgentNotification.css';
import SidebarUser from '../../components/sidebar/SidebarUser';

const AgentNotificationPage = () => {
	return (
		<div className='containerWrapper'>
			<SidebarUser />

			<AgentNotificationComponent />
		</div>
	);
};

export default AgentNotificationPage;
