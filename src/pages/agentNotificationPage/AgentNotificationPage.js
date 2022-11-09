import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import AgentNotificationComponent from './AgentNotificationComponent'
import '../agentNotificationPage/AgentNotification.css'

const AgentNotificationPage = () => {
  return (
    <div className='containerWrapper'>
        <Sidebar/>

        <AgentNotificationComponent />
    </div>
  )
}

export default AgentNotificationPage