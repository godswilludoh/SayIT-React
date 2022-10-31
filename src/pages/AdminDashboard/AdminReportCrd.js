// import React from "react";
import React from 'react'
import "./Admindash.css";
// import "./AgentDashboard.css";



 const AdminReportCrd = () => {
  return (
   <div>
  <ul className="Report_Cards">
    <li id="report_cards">Open Reports <span className="cardIcons">
        <i className="fa-solid fa-folder-open" />
      </span>
      <hr /> 
      <div id="cardNum">0</div>
    </li>
    <li id="report_cards">New Reports <span className="cardIcons">
        <i className="fa-solid fa-file-circle-exclamation" />
      </span>
      <hr />
      <div id="cardNum">0</div>
    </li>
    <li id="report_cards">Report Progress <span className="cardIcons">
        <i className="fa-solid fa-chart-line" />
      </span>
      <hr />
      <div id="cardNum">0</div>
    </li>
  </ul>
</div>


  )
}
export default AdminReportCrd
