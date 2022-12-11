import React, { useContext, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { FaPrint, FaTrash } from "react-icons/fa";
import style from "../agentDashboard/AgentDashBoardTable.module.css";
import AgentDashBoardModal from "./AgentDashBoardModal";
import AgentReportContext from "../../helper/context/agent-context/AgentReportContext";
import { AgentReportServices } from "../../helper/context/agent-context/agentreport.service";
import { useAuth } from "../../components/hooks/useAuth";
// import { deleteSpecificReportById } from "../../helper/context/agent-context/agentreport.service";
import { viewSpecificReportById } from "../../helper/context/agent-context/agentreport.service";

const AgentDashboardTable = () => {
  const { render } = useAuth();

  const [specificAgencyReport, setSpecificAgencyReport] = useState([]);
  const [viewspecificAgencyReport, setviewSpecificAgencyReport] = useState({});


  // const { loadReport, addReport, reports, deleteReport, findReportByID, render } =
  //   useContext(AgentReportContext); //This handles using the pure functions created

  // useEffect(() => {
  //   AgentReportServices.loadSpecificAgentReport().then((response) => {
  //     console.log(response)
  //   });
  // }, [render]);




  useEffect(() => {
    AgentReportServices.loadSpecificAgentReport().then((response) => {
      // console.log("response", response.data);
      setSpecificAgencyReport(response.data);
    });
  }, []);

  // console.log(specificAgencyReport);


  const [show, setShow] = useState(false);


const deleteReport = (reportIDParam) => {
  const deletedReport = specificAgencyReport.filter((report) => report.id  !== reportIDParam);
  setSpecificAgencyReport(deletedReport);
};



const showModalInfo =async(id)=>{
  const gottenReport = await viewSpecificReportById(id)
  setviewSpecificAgencyReport(gottenReport.data)
  setShow(true)
}
console.log(viewspecificAgencyReport)

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Report ID</th>
            <th>View Report</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {specificAgencyReport.map((details, index) => {
            return (
              <tr key={details.id}>
                <td>{index + 1}</td>
                <td>{details.id}</td>
                <td>
                  <button
                    onClick={() => showModalInfo(details.id)}
                    className={style.clickToSeeReport}
                  >
                    click to view more
                  </button>
                </td>
                <td>
                  <select className={style.agentTableReportSelect}>
                    <option value="select" selected>
                      Select
                    </option>
                    <option value="view">In View</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td>
                  <div className={style.delete_Print}>
                    <span className={style.deleteIcon}>
                      <FaPrint />
                    </span>
                    <span className={style.printIcon}>
                      <FaTrash onClick={()=>deleteReport(details.id)}/>
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <AgentDashBoardModal onClose={() => setShow(false)} show={show} viewspecificAgencyReport={viewspecificAgencyReport}/>
    </>
  );
};

export default AgentDashboardTable;
