import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { BiMessageSquareDots, BiLogOut } from 'react-icons/bi';
import { FaBars, FaUser, FaUsers, FaEdit, FaCheckDouble,  } from 'react-icons/fa';

import { NavLink, Link } from 'react-router-dom';
import './AdminSidebar.css';
// import { AdminReport } from './AdminReport';

const AdminSidebar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const menuItem = [
		{
			path: '/dashboard',
			name: 'Dashboard',
			icon: <MdDashboard />,
		},
		{
			path: '/notification',
			name: 'Notification',
			icon: <BiMessageSquareDots />,
		},
        {
            path: '/adminReport',
            name: 'Reports',
            icon: <FaEdit/>,
        },
        {
            path: '/adminUsers',
            name: 'Reg Users',
            icon: <FaUsers/>,
        },
        {
            path: '/adminAgents',
            name: 'Agents',
            icon: <FaCheckDouble/>,
        },
		{
			path: '/profile',
			name: 'Profile',
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
						activeclassname='active'
					>
						<div className='sidebar-icon'>{item.icon}</div>
						<div className='sidebar-text'>{item.name}</div>
					</NavLink>
				))}
			</div>
			{/* <main>{children}</main> */}
		</div>
	);
};

export default AdminSidebar;
