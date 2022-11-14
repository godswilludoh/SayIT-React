import React from 'react';

import './AgentDashBoard.css';
import AgentDashBoardModal from './AgentDashBoardModal';
import AgentDashBoardInterface from './AgentDashBoardInterface';
import SidebarUser from '../../components/sidebar/SidebarUser';

const AgentDashBoard = () => {
	return (
		<div className='main-container'>
			<SidebarUser />

			<AgentDashBoardInterface />

			<AgentDashBoardModal />
		</div>
	);
};

export default AgentDashBoard;
