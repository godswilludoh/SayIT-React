import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import {
	BiMessageSquareDots,
	BiLogOut,
	BiMessageSquareEdit,
} from 'react-icons/bi';
import { FaBars, FaUser } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const menuItem = [
		{
			path: '/agentDashBoard',
			name: 'Dashboard',
			icon: <MdDashboard />,
		},
		{
			path: '/agentNotificationPage',
			name: 'Notification',
			icon: <BiMessageSquareDots />,
		},
		{
			path: '/makereport',
			name: 'Make Report',
			icon: <BiMessageSquareEdit />,
		},
		{
			path: '/editprofile',
			name: 'Edit Profile',
			icon: <FaUser />,
		},
		{
			path: '/login',
			name: 'Logout',
			icon: <BiLogOut />,
		},
	];
	return (
		<div className='sidebar-container'>
			<div style={{ width: isOpen ? '250px' : '60px' }} className='sidebar'>
				<section className='top_section'>
					<div className='sidebar-bars'>
						<FaBars onClick={toggle} />
					</div>
					<Link to='/dashboard'>
						<div
							style={{ display: 'isOpen' ? 'block' : 'none' }}
							className='sidebar-logo'
						>
							<img
								src='/assets/SAYIT-removebg.png'
								height='80px'
								width='100px'
								alt='logo of the SayIT platform'
							/>
						</div>
					</Link>

					<h1
						style={{ display: 'isOpen' ? 'block' : 'none' }}
						className='sidebar-logo-text'
					>
						Say<span className='sidebar-it'>IT</span>
					</h1>
				</section>
				{menuItem.map((item, index) => (
					<NavLink
						to={item.path}
						key={index}
						className='sidebar-links'
						activeClassName='active'
					>
						<div className='sidebar-icon'>{item.icon}</div>
						<div className='sidebar-text'>{item.name}</div>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
