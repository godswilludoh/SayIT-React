import React from 'react'
import "./Admindash.css";
import AdminReportCrd from "./AdminReportCrd";
import AdminDashTable from "./AdminDashTable";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import { faBars } from '@fortawesome/free-solid-svg-icons';


const admindash = () => {
  return (
    <React.Fragment>

      <div className="main-container">
        {/* <SideNavSection/> */}
      </div>

      <div className="topAdmin">
        <ul className="admin_Dash_Nav">
        <li>
          <h3 id="dashBar">DASHBOARD</h3>
        </li>
        {/* THE TIME AND DATE SECTION */}
        <li>
        <div className="time">
       <p className="time-one">10:15</p>
        <p className="time-two" >02:11:2022</p>
        </div>
        </li>
        <li>
          <div className="forTheprofileImage">
            <div id="profile-container">
              <img id="profileImage" src="/assets/newUser.png" />
            </div>
            <input id="imageUpload" type="file" name="profile_photo" placeholder="Photo" required capture />
            <span className="Admin-ID" id="profilename"> </span>
          </div>
        </li>
        </ul>

        <AdminReportCrd />
        <AdminDashTable />
      
      </div>
    </React.Fragment>
  )
}

export default admindash;