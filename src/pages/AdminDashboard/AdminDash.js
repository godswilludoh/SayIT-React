import React from 'react';
import './Admindash.css';
import AdminReportCrd from './AdminReportCrd';
import {AdminDashTable} from './AdminDashTable';

import AdminSidebar from '../../components/Admin_comps/AdminSidebar';
import { DateTime } from '../../helper/date-time/DateTime';
// import { Link } from 'react-router-dom';
// import { AdminReport } from './AdminReport';

const admindash = () => {
	return (
		<React.Fragment>
			<div className='main-container'>
				<AdminSidebar />

				<div className='topAdmin'>
					<ul className='admin_Dash_Nav'>
						<li>
							<h3 id='dashBar'>DASHBOARD</h3>
						</li>
						{/* THE TIME AND DATE SECTION */}
						<li>
							<div className='time'>
								{/* <p className='time-one'>  */}
								<DateTime/>
								{/* </p> */}
								{/* <p className='time-two'></p> */}
							</div>
						</li>
						<li>
							<div className='forTheprofileImage'>
								<div id='profile-container'>
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

					<AdminReportCrd />
					<AdminDashTable />
				</div>
			</div>
			
				{/* <Link to ='/adminReports' element ={<AdminReport />} /> */}
			
		</React.Fragment>
	);
};

export default admindash;
