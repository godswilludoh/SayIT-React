import React, {useEffect, useState} from 'react'
import "./Admindash.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faCheckDouble, faFileCircleExclamation, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { RegisteredAgentService } from "../../helper/context/agent-context/agentreport.service";
import axios from "../../utility/api/axios";
// import { AdminContext, ReportProvider } from '../../helper/context/admin-context/AdminContex';


 const AdminReportCrd = () => {

  
  const [submitedReports, setSubmittedReports] = useState ({});



	useEffect(() => {
		axios.get("/v1/reports",   {headers: {
			Authorization : `Bearer ${localStorage.getItem("accessToken")}`
			}})
		.then((response) => {
		  // console.log("responses", response.data);
		  setSubmittedReports(response.data);
		});
	  }, []);


  useEffect(()=>{
  RegisteredAgentService.loadRegisteredAgent().then((response) => {
    // console.log("response", response.data);
    setAgentInfo(response.data)
  })
  }, []);


  const [agentinfo, setAgentInfo] = useState([])

  useEffect(()=>{
  RegisteredAgentService.loadRegisteredAgent().then((response) => {
    // console.log("response", response.data);
    setAgentInfo(response.data)
  })
  }, []);

  return (
   <div>
  <ul className="Report_Cards">
    <li id="report_cards"> Reports <span className="cardIcons">
    <FontAwesomeIcon id= 'cardicons' icon={ faFileCircleExclamation } />
      </span>
      <hr /> 
      <div id="cardNum">{submitedReports.length}</div>
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
