import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
// import Dashboard from './userdashboardPages/Dashboard';
// import Profile from './userdashboardPages/Profile';
import './UserDashboard.css';

const UserDashboard = () => {
	return (
		<div classname='userdashboard-container'>
			<sidebar/>
				<section className='dashboard-interface'>
					<div className='top'>
						<div className='info-display'>
							<p>Dashboard</p>
						</div>
						<div className='time'>
							<p className='time-one' />
							<p className='time-two' />
						</div>
						<div className='forTheprofileImage'>
							<div id='profile-container'>
								<img id='profileImage' src='/Images/newUser.png' />
							</div>
							<input
								id='imageUpload'
								type='file'
								name='profile_photo'
								placeholder='Photo'
								required
								capture
							/>
							<span className='forTheAgentID' id='profilename'>
								Samuel
							</span>
						</div>
					</div>
					<div className='dashboard-container'>
						<h2>
							👋 Welcome <span id='username'>Samuel</span>
						</h2>
						<p className='secure'>Your data is secure with us 🔐</p>
						<div className='cards'>
							<div className='card-item'>
								<p className='p-top'>Total</p>
								<br />
								<p className='p-bottom'>0</p>
							</div>
							<div className='card-item'>
								<p className='p-top'>Open Complaints</p>
								<br />
								<p className='p-bottom bottom2'>0</p>
							</div>
							<div className='card-item'>
								<p className='p-top'>Resolved complaints</p>
								<br />
								<p className='p-bottom'>0</p>
							</div>
							<div className='button-container'>
								<a className='report-button' href='/pages/makeReport.html'>
									Make New Report
								</a>
							</div>
						</div>
						<div className='table-section'>
							<div className='user-table'>
								<div className='report-table'>
									<div className='report-text'>
										<p>Reports</p>
									</div>
									<div className='report-id'>
										<input
											id='search-input'
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
							<div className='pagination'>
								<a id='prev-button' className='pagination-bracket' href='#'>
									‹
								</a>
								<a className='pagination-item' href='#'>
									1
								</a>
								<a className='pagination-item' href='#'>
									2
								</a>
								<a className='pagination-item' href='#'>
									3
								</a>
								<a className='pagination-item' href='#'>
									4
								</a>
								<a className='pagination-item' href='#'>
									5
								</a>
								<a id='next-button' className='pagination-bracket' href='#'>
									›
								</a>
							</div>
						</div>
					</div>
				</section>
		</div>
	);
};

export default UserDashboard;
