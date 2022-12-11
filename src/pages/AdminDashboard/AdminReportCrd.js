import React, {useEffect, useState} from 'react'
import "./Admindash.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faCheckDouble, faFileCircleExclamation, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { RegisteredAgentService } from "../../helper/context/agent-context/agentreport.service";
	

 const AdminReportCrd = () => {
  const [agentinfo, setAgentInfo] = useState([])

  useEffect(()=>{
  RegisteredAgentService.loadRegisteredAgent().then((response) => {
    console.log("response", response.data);
    setAgentInfo(response.data)
  })
  }, []);

  return (
   <div>
  <ul className="Report_Cards">
    <li id="report_cards"> New Report<span className="cardIcons">
    <FontAwesomeIcon id= 'cardicons' icon={ faFileCircleExclamation } />
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

    <li id="report_cards"> Agency <span className="cardIcons">
    
      <FontAwesomeIcon id= 'cardicons'icon ={faCheckDouble} />
      </span>
      <hr />
      <div id="cardNum">{agentinfo.length}</div>
    </li>
  </ul>
</div>


  )
}
export default AdminReportCrd
