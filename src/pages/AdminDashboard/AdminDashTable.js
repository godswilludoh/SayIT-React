import React from 'react';
import './Admindash.css';
// import "./AgentDashboard.css";

export const AdminDashTable = () => {
	return (
		<div className='NotifyBar'>
			<div>
				<h3 className='Notify'>Notifications 📩</h3>
				<ul className='Notifications'>
					<li>
						{' '}
						<strong>All</strong> <span className='notifyNums'>0</span>
					</li>
					<li>
						{' '}
						<strong>Unread</strong> <span className='notifyNums'>0</span>
					</li>
					<li>
						{' '}
						<strong>Reports</strong> <span className='notifyNums'>0</span>
					</li>
					<li>
						{' '}
						<strong>Users</strong> <span className='notifyNums'>0</span>
					</li>
					<li>
						{' '}
						<strong>Agents</strong> <span className='notifyNums'>0</span>
					</li>
				</ul>
				<hr />
			</div>
			<div>
				<ul id='notificatonlist'>
					{/* <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li> */}
				</ul>
			</div>
		</div>
	);
};

export default AdminDashTable;
