import React from 'react';

import './AgentDashBoard.css';
import AgentDashBoardModal from './AgentDashBoardModal';
import AgentDashBoardInterface from './AgentDashBoardInterface';
import { SidebarAgents } from '../../components/sidebar/SidebarAgents';

const AgentDashBoard = () => {
	return (
		<div className='main-container'>
			<SidebarAgents />

			<AgentDashBoardInterface />

			<AgentDashBoardModal />
		</div>
	);
};

export default AgentDashBoard;
