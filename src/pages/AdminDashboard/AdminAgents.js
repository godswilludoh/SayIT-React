import React, { useEffect, useState } from "react";
import { SidebarAdmin } from "../../components/sidebar/SidebarAdmin";
import { DateTime } from "../../helper/date-time/DateTime";
// import { AdminReportTable } from './AdminDashTable';
import "./Admindash.css";
import AdminAgentModal from "./AdminAgentModal";
import { RegisteredAgentService } from "../../helper/context/agent-context/agentreport.service";


export const AdminAgents = () => {
  const [show, setShow] = useState(false);
  const [suspend, setSuspend] = useState(false);
  const [agentinfo, setAgentInfo] = useState([])

  useEffect(()=>{
  RegisteredAgentService.loadRegisteredAgent().then((response) => {
    console.log("response", response.data);
    setAgentInfo(response.data)
  })
  }, []);

const togglebtn = ()=>{
  setSuspend(!suspend);

}
  return (
    <React.Fragment>
      <div className="main-container">
        <SidebarAdmin />

        <div className="topAdmin">
          <ul className="admin_Dash_Nav">
            <li>
              <h2 id="dashBar">Agents</h2>
            </li>
            {/* THE TIME AND DATE SECTION */}
            <li>
              <div className="time">
                <DateTime />
              </div>
            </li>
            <li>
              <div className="forTheprofileImage">
                <div id="profile-container">
                  <img id="profileImage" src="/assets/newUser.png" />
                </div>
                <input
                  id="imageUpload"
                  type="file"
                  name="profile_photo"
                  placeholder="Photo"
                  required
                  capture
                />
                <span className="Admin-ID" id="profilename">
                  {" "}
                </span>
              </div>
            </li>
          </ul>

          {/* <AdminReportTable /> */}
          <div id="taable_sec">
            <div className="agent-intro">
              <h4 className="tableTitle">
                <span>
                  <input
                    type="text"
                    className="tableSearch"
                    placeholder="Enter Report ID"
                  />
                </span>
              </h4>
              <span>
                <button
                  onClick={() => setShow(true)}
                  className="agent-board-btn"
                >
                  On board New Agent
                </button>
              </span>
            </div>
            <div id="user-table">
              <div className="table-del">
                <div></div>
              </div>
              <table id="user-table">
                <tbody>
                  <tr>
                    <th>S/N</th>
                    <th>Agency</th>
                    <th>Sector</th>
                    <th>Reg Number</th>
                    <th>Reg Info</th>
                    <th>Status</th>
                    <th>Action</th>
                    
                  </tr>
                  {agentinfo.map((agentinfo) => (
                  <tr key={agentinfo.id}>

                      <td>{agentinfo.id}</td>
                   
                      <td >{agentinfo.name}</td>
                    
                      <td >{agentinfo.sector}</td>
                    
                      <td>{agentinfo.regNumber}</td>
                   
                      <td> {agentinfo.updatedAt}</td>
                    
                    <td>On Boarded</td>

                    <button  className={"suspend-btn" +(suspend ? 'suspended-btn' : '')} onClick={togglebtn}>
                      {suspend ? 'SUSPENDED' : 'Suspend'}
                      </button>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <AdminAgentModal onClose={() => setShow(false)} show={show} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
