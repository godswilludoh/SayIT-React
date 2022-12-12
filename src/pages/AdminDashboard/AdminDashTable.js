import React, { useEffect, useState } from "react";
import "./Admindash.css";
import axios from "../../utility/api/axios";
import { RegisteredAgentService } from "../../helper/context/agent-context/agentreport.service";
// import { deleteSpecificReportById } from "../../helper/context/agent-context/agentreport.service";
// import { viewSpecificReportById } from "../../helper/context/agent-context/agentreport.service";



export const AdminDashTable = () => {
  const [agentinfo, setAgentInfo] = useState([]);


  // UseEffect for all Report start here
  const [submitedReports, setSubmittedReports] = useState({});

  useEffect(() => {
    axios
      .get("/v1/reports", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        // console.log("responses", response.data);
        setSubmittedReports(response.data);
      });
  }, []);



// UseEffect for all onboared agents start here
  useEffect(() => {
    RegisteredAgentService.loadRegisteredAgent().then((response) => {
      // console.log("response", response.data);
      setAgentInfo(response.data);
    });
  }, []);


  // UseEffect for all reg users start here
  const [regUsers, setRegUsers] = useState([]);

	useEffect(() => {
		axios
		  .get("/v1/users/reporter", {
			headers: {
			  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		  })
		  .then((response) => {
			console.log("resForRegUses", response.data);
			setRegUsers(response.data);
		  });
	  }, []);
	
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
            <strong>All</strong>{" "}
            <span className="notifyNums">
              {submitedReports.length + agentinfo.length + regUsers.length}
            </span>
          </li>
          {/* <li>
            {" "}
            <strong>Unread</strong> <span className="notifyNums">0</span>
          </li> */}
          <li>
            {" "}
            <strong>Reports</strong>{" "}
            <span className="notifyNums">{submitedReports.length}</span>
          </li>
          <li>
            {" "}
            <strong>Users</strong> <span className="notifyNums">{regUsers.length}</span>
          </li>
          <li>
            {" "}
            <strong>Agents</strong>{" "}
            <span className="notifyNums">{agentinfo.length}</span>
          </li>
        </ul>
        <div>
          <ul id="notificatonlist">
            {/* <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
                Agent Phillip <strong> (NPF)</strong> <br></br>
                10h ago </li>
              <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
                  Agent Phillip <strong> (NPF)</strong> <br></br>
                  10h ago </li>
               <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
                    Agent Phillip <strong> (NPF)</strong> <br></br>
                    10h ago </li>
               <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
                    Agent Phillip <strong> (NPF)</strong> <br></br>
                    10h ago </li>
               <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
                    Agent Phillip <strong> (NPF)</strong> <br></br>
                    10h ago </li>
               <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
                    Agent Phillip <strong> (NPF)</strong> <br></br>
                    10h ago </li>
               <li> <strong> Admin Godswill</strong> onboarded Agent Simon <strong>(FRSC)</strong> and
                    Agent Phillip <strong> (NPF)</strong> <br></br>
                    10h ago </li> */}
          </ul>
        </div>
      </div>
      <div>
        {/* <ul id="notificatonlist">
          
        </ul> */}
      </div>
    </div>
  );
};

export const AdminReportTable = () => {
  const [submitedReports, setSubmittedReports] = useState([]);
  // const [specificAgencyReport, setSpecificAgencyReport] = useState([]);
  // const [viewspecificAgencyReport, setviewSpecificAgencyReport] = useState({});

  useEffect(() => {
    axios
      .get("/v1/reports", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log("responses", response.data);
        setSubmittedReports(response.data);
      });
  }, []);

// const [deletedReports, setdeletedReports] = useState()

// useEffect(() => {
//   axios
//     .get("v1/reports/11", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     })
//     .then((response) => {
//       // console.log("responses", response.data);
//       setdeletedReports(response);
//     });
// }, []); 


  // const deleteReports = (reportIDParam) => {
  //   const deletedReports = specificAgencyReport.filter((report) => report.id  !== reportIDParam);
  //   setSpecificAgencyReport(deletedReports);
  // };

  return (
    <React.Fragment>
      <div id="taable_sec">
        <div>
          <h4 className="tableTitle">
            <span>
              <input
                type="text"
                className="tableSearch"
                placeholder="Enter Report ID"
              />
            </span>
          </h4>
        </div>
        <div id="user-table">
          <div className="table-del">
            <div></div>
          </div>
          <table id="user-table">
            <tbody>
              <tr>
                <th>S/N</th>
                <th>Agency ID</th>
                <th>Report ID</th>
                <th>Status</th>
                <th>Sector</th>
                <th>Date Reported</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
              {submitedReports.map((value, index) => {
                 return( 
                <tr>
                 
                  <td> {index + 1}</td>
                  <td> {value.agencyId} </td>
                  <td> {value.id} </td>
                  <td> {value.status} </td>
                  <td> {value.sector} </td>
                  <td> {value.updatedAt} </td>
                  <td> {value.subject} </td>
                  <button className="suspend-btn">
                     Delete </button>
                </tr>
                 );
              })} 
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

// export default AdminDashTable;
