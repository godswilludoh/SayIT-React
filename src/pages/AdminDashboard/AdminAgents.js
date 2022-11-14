import React from 'react';
import { SidebarAdmin } from '../../components/sidebar/SidebarAdmin';
import { DateTime } from '../../helper/date-time/DateTime';
import { AdminReportTable } from './AdminDashTable';

export const AdminAgents = () => {
	return (
		<React.Fragment>
			<div className='main-container'>
				<SidebarAdmin />
				<div className='topAdmin'>
					<ul className='admin_Dash_Nav'>
						<li>
							<h3 id='dashBar'>AGENTS</h3>
						</li>
						{/* THE TIME AND DATE SECTION */}
						<li>
							<div className='time'>
								<DateTime />
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

					<AdminReportTable />
				</div>
			</div>
		</React.Fragment>
	);
};
