import React from 'react';
import adminUsersCSS from './adminUsers.module.css';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from '../../helper/date-time/DateTime';
import { SidebarAdmin } from '../../components/sidebar/SidebarAdmin';

export const AdminUsers = () => {
	return (
		<React.Fragment>
			<div className='main-container'>
				<SidebarAdmin />

				<div className='topAdmin'>
					<ul className='admin_Dash_Nav'>
						<li>
							<h3 id='dashBar'>USERS</h3>
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
					<div className={adminUsersCSS.Display_comtainier}>
						<div className={adminUsersCSS.checkSearchBar}>
							<input
								type='text'
								className={adminUsersCSS.search_Bar}
								placeholder='Search by Name or Email'
							/>
							{/* <span>
								<input type='checkbox' className={adminUsersCSS.checkboxes} />
								<p>Show anaonymous Users</p>
							</span>
							<span>
								<input type='checkbox' id='checkboxes' />{' '}
								<p>Show Registered Users</p>
							</span> */}
						</div>
						<div className='Table-display-section'>
							<table className={adminUsersCSS.table_interfc}>
								<tbody className={adminUsersCSS.table_rowss}>
									<tr className={adminUsersCSS.table_rowss}>
										<th>Email</th>
										<th>Username</th>
										<th>Phone No</th>
										<th>Registration date</th>
										<th>Actions</th>
									</tr>
									<tr>
										<td><FontAwesomeIcon id='cardicons' icon={faUser} />{' '}
											Anonymous@mail.com
										</td>
										<td> Anonymous</td>
										<td>0987654321</td>
										<td>11/09/0303</td>
										<td className='suspend-btn'>
											<FontAwesomeIcon id='cardicons' icon={faTrash} /> Delete
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
