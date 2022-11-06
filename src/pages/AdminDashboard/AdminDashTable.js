import React from "react";
import "./Admindash.css";

export const AdminDashTable = () => {
  return (
    <div className="NotifyBar">
      <div>
        <h3 className="Notify">
          Notifications
          <span className="report-id">
            <input
              className="tableSearchOption"
              id="search-input"
              data-table="user-table"
              type="text"
              placeholder="Search"
            />
          </span>
        </h3>
        <ul className="Notifications">
          <li>
            {" "}
            <strong>All</strong> <span className="notifyNums">0</span>
          </li>
          <li>
            {" "}
            <strong>Unread</strong> <span className="notifyNums">0</span>
          </li>
          <li>
            {" "}
            <strong>Reports</strong> <span className="notifyNums">0</span>
          </li>
          <li>
            {" "}
            <strong>Users</strong> <span className="notifyNums">0</span>
          </li>
          <li>
            {" "}
            <strong>Agents</strong> <span className="notifyNums">0</span>
          </li>
        </ul>
        <hr />
      </div>
      <div>
        <ul id="notificatonlist">
          {/* <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>
      <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
        Agent Phillip <strong> (NPF)</strong> <br /><br />
        10h ago </li>*/}
        </ul>
      </div>
    </div>
  );
};

export const AdminReportTable = () => {
  return (
    <React.Fragment>
      <div id="taable_sec">
  <div>
    <h4 className="tableTitle"> 
    <span>
    <input type="text" className= "tableSearch" placeholder="Enter Report ID" />
    </span>
    </h4>
  </div>
  <div id="user-table">
    <div className="table-del">
      <div>
      </div></div><table id="user-table">
      <tbody><tr>
          <th>S/N</th>
          <th>Agency Charged</th>
          <th>Report ID</th>
          <th>Sector</th>
          <th>View Report</th>
          <th>Status</th>
          <th>Admin Charged</th>
          <th>Action</th>
        </tr>
        
      </tbody></table>
  </div>
</div>

    </React.Fragment>
  );
};

// export default AdminDashTable;
