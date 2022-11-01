import React from 'react'
import "./Admindash.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFolderOpen, faFileCircleExclamation, faChartLine } from '@fortawesome/free-solid-svg-icons';



 const AdminReportCrd = () => {
  return (
   <div>
  <ul className="Report_Cards">
    <li id="report_cards">Open Reports <span className="cardIcons">
    <FontAwesomeIcon id= 'cardicons' icon={ faFolderOpen } />
      </span>
      <hr /> 
      <div id="cardNum">0</div>
    </li>
    <li id="report_cards">New Reports <span className="cardIcons">
    
      <FontAwesomeIcon id= 'cardicons'icon ={faFileCircleExclamation} />
      </span>
      <hr />
      <div id="cardNum">0</div>
    </li>
    <li id="report_cards">Report Progress <span className="cardIcons">
        <FontAwesomeIcon id= 'cardicons' icon={faChartLine} />
      </span>
      <hr />
      <div id="cardNum">0</div>
    </li>
  </ul>
</div>


  )
}
export default AdminReportCrd
