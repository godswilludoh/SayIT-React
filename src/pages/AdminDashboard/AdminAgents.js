import React from 'react'
import AdminSidebar from '../../components/Admin_comps/AdminSidebar'
import { AdminReportTable } from './AdminDashTable'

export const AdminAgents = () => {
  return (
    <React.Fragment>
    <div className='main-container'>
				<AdminSidebar />

				<div className='topAdmin'>
					<ul className='admin_Dash_Nav'>
						<li>
							<h3 id='dashBar'>AGENTS</h3>
						</li>
						{/* THE TIME AND DATE SECTION */}
						<li>
							<div className='time'>
								<p className='time-one'>10:15</p>
								<p className='time-two'>02:11:2022</p>
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
  )
}
