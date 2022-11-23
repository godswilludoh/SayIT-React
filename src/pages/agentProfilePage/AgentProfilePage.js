import React from 'react'
import { SidebarAgents } from '../../components/sidebar/SidebarAgents';
import './AgentProfilePage.css';
import AgentProfileComponent from './AgentProfileComponent';

const AgentProfilePage = () => {
  return (
    <div className='containerWrapper'>
        <SidebarAgents />

        <AgentProfileComponent/>
    </div>
  );
};

export default AgentProfilePage;