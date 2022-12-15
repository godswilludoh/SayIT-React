import React from 'react';

import './AgentDashBoard.css';
import AgentDashBoardInterface from './AgentDashBoardInterface';
import { SidebarAgents } from '../../components/sidebar/SidebarAgents';

const AgentDashBoard = () => {
	return (
		<div className='main-container'>
			<SidebarAgents />
			<AgentDashBoardInterface />
		</div>
	);
};

export default AgentDashBoard;
