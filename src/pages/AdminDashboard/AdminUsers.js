import React, { useState, useEffect } from 'react';
import adminUsersCSS from './adminUsers.module.css';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from '../../helper/date-time/DateTime';
import { SidebarAdmin } from '../../components/sidebar/SidebarAdmin';
import axios from '../../utility/api/axios';
export const AdminUsers = () => {

	const [regUsers, setRegUsers] = useState([]);

	useEffect(() => {
		axios
		  .get("/v1/users/reporter", {
			headers: {
			  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		  })
		  .then((response) => {
			console.log("resForRegUses", response.data);
			setRegUsers(response.data);
		  });
	  }, []);
	

	return (
		<React.Fragment>
			<div className='main-container'>
				<SidebarAdmin />

				<div className='topAdmin'>
					<ul className='admin_Dash_Nav'>
						<li>
							<h2 id='dashBar'>USERS</h2>
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
										<th>S/N</th>
										<th>Username</th>
										<th>Email</th>
										<th>Phone No</th>
										<th>Registration date</th>
										<th>Actions</th>
									</tr>
									{regUsers.map((value, index, props) =>{
										return(
											<tr key={props}>
												<td>{index +1 }</td>
												<td>{value.userName }</td>
												<td>{value.email }</td>
												<td>{value.phoneNumber }</td>
												<td>{value.updatedAt }</td>
												<button className='suspend-btn'>
												Delete</button>

											</tr>
										);
									})}
									{/* <tr>
										<td><FontAwesomeIcon id='cardicons' icon={faUser} />{' '}
											Anonymous@mail.com
										</td>
										<td> Anonymous</td>
										<td>0987654321</td>
										<td>11/09/0303</td>
										<td className='suspend-btn'>
											<FontAwesomeIcon id='cardicons' icon={faTrash} /> Delete
										</td>
									</tr> */}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
