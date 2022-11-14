import React from 'react';
import SidebarUser from '../../../../components/sidebar/SidebarUser';
import { EditFormik } from './EditFormik';
import EditFormTop from './EditFormTop';
import './EditProfile.css';

export const EditProfile = () => {
	return (
		<div className='editProfile-container'>
			<SidebarUser />
			<div className='editform-container'>
				<div className='editform-top'>
					<EditFormTop classname='editform-title' title='Edit Profile' />
				</div>
				<EditFormik />
			</div>
		</div>
	);
};
