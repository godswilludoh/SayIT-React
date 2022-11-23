import React from 'react'
import { SidebarAdmin } from '../../components/sidebar/SidebarAdmin';
import { DateTime } from '../../helper/date-time/DateTime';
import { AdminprofileForm } from './AdminprofileForm';
import './Admindash.css';
import './adminprofile.css';
export const  AdminProfile = () => {
	return (
		<React.Fragment>
			<div className='main-container'>
				<SidebarAdmin />
				<div className='topAdmin'>
                        <ul className='admin_Dash_Nav'>
                            <li>
                                <h2 id='dashBar'>Profile</h2>
                            </li>
                            {/* THE TIME AND DATE SECTION */}
                            <li>
                                <div className='time'>
                                    <DateTime />
                                </div>
                            </li>
                            <li>
                                <div className='TheprofileImage'>
                                    <div id='the-profile-container'>
                                        <img id='profileImage' src='/assets/newUser.png' />
                                    </div>
                                    <input
                                        id='imageUpload'
                                        type='file'
                                        name='profile_photo'
                                        placeholder='Photo'
                                        required
                                        capture
                                    />
                                    <span className='Admin-ID' id='profilename'>
                                        {' '}
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <AdminprofileForm/>
                 </div>
                
			</div>
		</React.Fragment>
	);
};



 