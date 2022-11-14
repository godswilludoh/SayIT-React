import React from 'react';

import AgentNotificationComponent from './AgentNotificationComponent';
import '../agentNotificationPage/AgentNotification.css';
import { SidebarAgents } from '../../components/sidebar/SidebarAgents';

const AgentNotificationPage = () => {
	return (
		<div className='containerWrapper'>
			<SidebarAgents />

			<AgentNotificationComponent />
		</div>
	);
};

export default AgentNotificationPage;
