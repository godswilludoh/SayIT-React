import React from 'react';

import './AgentDashBoard.css';
import AgentDashBoardModal from './AgentDashBoardModal';
import AgentDashBoardInterface from './AgentDashBoardInterface';
import Sidebar from '../../components/sidebar/Sidebar';

const AgentDashBoard = () => {
	return (
		<div className='main-container'>
			<Sidebar />

			<AgentDashBoardInterface />

			<AgentDashBoardModal />
		</div>
	);
};

export default AgentDashBoard;
