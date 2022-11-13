import React from 'react';
import SidebarUser from '../../../../components/sidebar/SidebarUser';
import { EditFormik } from './EditFormik';
import './EditProfile.css';

// And now we can use these
export const EditProfile = () => {
	return (
		<div className='editProfile-container'>
			<SidebarUser />
			<EditFormik />
		</div>
	);
};
