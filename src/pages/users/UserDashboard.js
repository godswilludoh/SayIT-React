import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { DateTime } from '../../helper/date-time/DateTime';
import './UserDashboard.css';

const UserDashboard = () => {
	return (
		<div className='userdashboard-container'>
			<Sidebar />
			<div className='userdashboard-interface'>
				<div className='user-top'>
					<div className='user-info-display'>
						<p>Dashboard</p>
					</div>
					<div className='user-time'>
						<DateTime></DateTime>
					</div>
					<div className='userProfileImg'>
						<div id='user-profile-container'>
							<img id='user-profileImage' src='/Images/newUser.png' />
						</div>
						<input
							id='imageUpload'
							type='file'
							name='profile_photo'
							placeholder='Photo'
							required
							capture
						/>
						<span className='user-id' id='user-profilename'>
							Samuel
						</span>
					</div>
				</div>
				<div className='user-dashboard-container'>
					<h2>
						👋 Welcome <span id='user-username'>Samuel</span>
					</h2>
					<p className='user-secure'>Your data is safe with us 🔐</p>
					<div className='user-cards'>
						<div className='user-card-item'>
							<p className='user-p-top'>Total</p>
							<br />
							<p className='user-p-bottom'>0</p>
						</div>
						<div className='user-card-item'>
							<p className='user-p-top'>Open Complaints</p>
							<br />
							<p className='user-p-bottom user-bottom2'>0</p>
						</div>
						<div className='user-card-item'>
							<p className='user-p-top'>Resolved complaints</p>
							<br />
							<p className='user-p-bottom'>0</p>
						</div>
						<div className='user-button-container'>
							<a className='user-report-button' href='/pages/makeReport.html'>
								Make New Report
							</a>
						</div>
					</div>
					<div className='user-table-section'>
						<div className='user-table'>
							<div className='user-report-table'>
								<div className='user-report-text'>
									<p>Reports</p>
								</div>
								<div className='user-report-id'>
									<input
										id='user-search-input'
										data-table='user-table'
										type='text'
										placeholder='Enter Report ID'
									/>
								</div>
							</div>
						</div>
						{/* <table id="user-table">
      <tr>
        <th>S/N</th>
        <th>Date reported</th>
        <th>Report ID</th>
        <th>Sector</th>
        <th>Action</th>
      </tr>
      <tr class="row">
        <td>1.</td>
        <td>DD/MM/YYYY MM:HH</td>
        <td>Report/000001</td>
        <td class="sector">Finance</td>
        <td>
          <div class="table-icons">
            <div>
              <a class="report-button view" href="#">View</a>
            </div>
            <div>
              <box-icon name='printer' type='solid'></box-icon>
            </div>
          </div>
        </td>
      </tr>

      <tr class="row">
        <td>2.</td>
        <td>DD/MM/YYYY MM:HH</td>
        <td>Report/000002</td>
        <td class="sector">Security</td>
        <td>
          <div class="table-icons">
            <div>
              <a class="report-button view" href="#">View</a>
            </div>
            <div>
              <box-icon name='printer' type='solid'></box-icon>
            </div>
          </div>
        </td>
      </tr>

      <tr class="row">
        <td>3.</td>
        <td>DD/MM/YYYY MM:HH</td>
        <td>Report/000003</td>
        <td class="sector">Finance</td>
        <td>
          <div class="table-icons">
            <div>
              <a class="report-button view" href="#">View</a>
            </div>
            <div>
              <box-icon name='printer' type='solid'></box-icon>
            </div>
          </div>
        </td>
      </tr>

      <tr class="row">
        <td>4.</td>
        <td>DD/MM/YYYY MM:HH</td>
        <td>Report/000004</td>
        <td class="sector">Finance</td>
        <td>
          <div class="table-icons">
            <div>
              <a class="report-button view" href="#">View</a>
            </div>
            <div>
              <box-icon name='printer' type='solid'></box-icon>
            </div>
          </div>
        </td>
      </tr>

      <tr class="row">
        <td>5.</td>
        <td>DD/MM/YYYY MM:HH</td>
        <td>Report/000005</td>
        <td id="reportSector"></td>
        <td>
          <div class="table-icons">
            <div>
              <a class="report-button view" href="#">View</a>
            </div>
            <div>
              <box-icon name='printer' type='solid'></box-icon>
            </div>
          </div>
        </td>
      </tr>
    </table> */}
						<table id='user-table' className='user-table'></table>
						<div className='user-pagination'>
							<a id='prev-button' className='user-pagination-bracket' href='#'>
								‹
							</a>
							<a className='user-pagination-item' href='#'>
								1
							</a>
							<a className='user-pagination-item' href='#'>
								2
							</a>
							<a className='user-pagination-item' href='#'>
								3
							</a>
							<a className='user-pagination-item' href='#'>
								4
							</a>
							<a className='user-pagination-item' href='#'>
								5
							</a>
							<a id='next-button' className='user-pagination-bracket' href='#'>
								›
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
