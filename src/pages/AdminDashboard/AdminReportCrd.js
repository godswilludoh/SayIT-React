import React from 'react'
import "./Admindash.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFolderOpen, faFileCircleExclamation, faUserPlus } from '@fortawesome/free-solid-svg-icons';



 const AdminReportCrd = () => {
  return (
   <div>
  <ul className="Report_Cards">
    <li id="report_cards"> New Report<span className="cardIcons">
    <FontAwesomeIcon id= 'cardicons' icon={ faFileCircleExclamation } />
      </span>
      <hr /> 
      <div id="cardNum">0</div>
    </li>
    <li id="report_cards"> Open Reports<span className="cardIcons">
    
      <FontAwesomeIcon id= 'cardicons'icon ={faFolderOpen} />
      </span>
      <hr />
      <div id="cardNum">0</div>
    </li>
    <li id="report_cards"> New User<span className="cardIcons">
        <FontAwesomeIcon id= 'cardicons' icon={faUserPlus} />
      </span>
      <hr />
      <div id="cardNum">0</div>
    </li>
  </ul>
</div>


  )
}
export default AdminReportCrd
