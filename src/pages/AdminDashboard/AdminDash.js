import React from 'react'
import "./Admindash.css";
import AdminReportCrd from "./AdminReportCrd";
import AdminDashTable from "./AdminDashTable";


const admindash = () => {
  return (
    <React.Fragment>

     <div className="main-container">
      {/* <SideNavSection/> */}
      </div>

    <div className="topAdmin">

      {/* THE TIME AND DATE SECTION */}
      {/* <div className="top"> */}
      <div className="time">
     <p className="time-one" />
      <p className="time-two" />
     </div>
      {/* </div> */}

     <ul className="admin_Dash_Nav">
      <li>
        <h4 id="dashBar">DASHBOARD</h4>
      </li>
      <li>
        <div className="forTheprofileImage">
          <div id="profile-container">
            <img id="profileImage" src="/Images/newUser.png" />
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