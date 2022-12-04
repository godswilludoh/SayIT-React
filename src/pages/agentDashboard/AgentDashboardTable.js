import React from "react";
import Table from "react-bootstrap/Table";
import { FaPrint, FaTrash } from "react-icons/fa";
import style from "../agentDashboard/AgentDashBoardTable.module.css";

const AgentDashboardTable = () => {
  return (
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
        <tr>
          <td>1</td>
          <td>001</td>
          <td>
            <button className={style.clickToSeeReport}>
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
                <FaTrash />
              </span>
            </div>
          </td>
        </tr>
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>slim Joe</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>mai lafiya</td>
        </tr> */}
      </tbody>
    </Table>
  );
};

export default AgentDashboardTable;
