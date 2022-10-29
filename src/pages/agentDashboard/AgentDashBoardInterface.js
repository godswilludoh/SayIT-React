import React from "react";

const AgentDashBoardInterface = () => {
  return (
    <section className="dashboard-interface" id="theSecondSideOfThePage">
      <div className="top">
        <div className="info-display">
          <p className="text-display" />
        </div>
        <div className="time">
          <p className="time-one">1 : 15</p>
          <p className="time-two"> 01 : 09 : 2022</p>
        </div>
        <div className="forTheprofileImage">
          <div id="profile-container">
            <img id="profileImage" src="/assets/newUser.png" />
          </div>
          <input
            id="imageUpload"
            className="profileImageInputField"
            type="file"
            name="profile_photo"
            placeholder="Photo"
            required
            capture
          />
          <span className="forTheAgentID">Funmi Bankole</span>
        </div>
      </div>
      <div className="dashboard-container">
        <h2 className="registeredAgencyName">
          Federal Road Safety Corps(FRSC)
        </h2>
        <section className="metricCardContainer">
          <div className="coverForEachCard">
            <div className="forCardWrapper">
              <p className="cardWording">Total</p>
              <a href="#" className="otherCardWording">
                Report Submitted
              </a>
            </div>
            <div className="theMetricItself">0</div>
          </div>
          <div className="coverForEachCard">
            <div className="forCardWrapper">
              <p className="cardWording">Open Complaints</p>
              <a href="#" className="otherCardWording">
                show
              </a>
            </div>
            <div className="theMetricItself openComplaint">0</div>
          </div>
          <div className="coverForEachCard">
            <div className="forCardWrapper">
              <p className="cardWording">Resolved Complaints</p>
              <a href="#" className="otherCardWording">
                show
              </a>
            </div>
            <div className="theMetricItself">0</div>
          </div>
          <div className="forTheNotification_Report">
            <div className="forNotificationButton">
              <a href="/pages/notification.html" id="messageLink">
                Notification
              </a>
            </div>
            <div className="forPrintButton">
              <a href="#" id="printReport">
                Print Report
              </a>
            </div>
          </div>
        </section>
        <section id="containerHousingTheTableData">
          <div className="user-table">
            <div className="report-table">
              <div className="report-text">
                <p>Reports</p>
              </div>
              <div className="report-id">
                <input
                  className="tableSearchOption"
                  id="search-input"
                  data-table="user-table"
                  type="text"
                  placeholder="Search Report by ID"
                />
              </div>
            </div>
          </div>
          <table id="user-table" className="user-table">
            <tbody>
              <tr>
                <th>S/N</th>
                <th>Date reported</th>
                <th>Report ID</th>
                <th>View Report</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr className="row">
                <td>1</td>
                <td>31/08/2022</td>
                <td>Report/0000001</td>
                <td>
                  <a href="#" className="toViewMoreLinke" onclick="openPopUp()">
                    Click to view
                  </a>
                </td>
                <td>
                  <select className="tableSelect">
                    <option value="select" selected>
                      Select
                    </option>
                    <option value="view">In View</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td>
                  <div className="forTheUpdateAndDownloadButton">
                    <a href="#" className="forTheDeleteButton">
                      Delete
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{ fill: "rgba(0, 0, 0, 1)" }}
                      >
                        <path d="M19 7h-1V2H6v5H5a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v3h12v-3h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3zM8 4h8v3H8V4zm0 16v-4h8v4H8zm11-8h-4v-2h4v2z" />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>

              <tr className="row">
                <td>2</td>
                <td>31/08/2022</td>
                <td>Report/0000001</td>
                <td>
                  <a href="#" className="toViewMoreLinke" onclick="openPopUp()">
                    Click to view
                  </a>
                </td>
                <td>
                  <select className="tableSelect">
                    <option value="select" selected>
                      Select
                    </option>
                    <option value="view">In View</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td>
                  <div className="forTheUpdateAndDownloadButton">
                    <a href="#" className="forTheDeleteButton">
                      Delete
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{ fill: "rgba(0, 0, 0, 1)" }}
                      >
                        <path d="M19 7h-1V2H6v5H5a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v3h12v-3h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3zM8 4h8v3H8V4zm0 16v-4h8v4H8zm11-8h-4v-2h4v2z" />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>

              <tr className="row">
                <td>3</td>
                <td>31/08/2022</td>
                <td>Report/0000001</td>
                <td>
                  <a href="#" className="toViewMoreLinke" onclick="openPopUp()">
                    Click to view
                  </a>
                </td>
                <td>
                  <select className="tableSelect">
                    <option value="select" selected>
                      Select
                    </option>
                    <option value="view">In View</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td>
                  <div className="forTheUpdateAndDownloadButton">
                    <a href="#" className="forTheDeleteButton">
                      Delete
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{ fill: "rgba(0, 0, 0, 1)" }}
                      >
                        <path d="M19 7h-1V2H6v5H5a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v3h12v-3h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3zM8 4h8v3H8V4zm0 16v-4h8v4H8zm11-8h-4v-2h4v2z" />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <table id="agents-table" class="user-table"> */}
        </section>
      </div>
    </section>
  );
};

export default AgentDashBoardInterface;