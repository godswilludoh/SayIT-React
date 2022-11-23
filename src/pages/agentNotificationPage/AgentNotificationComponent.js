import React from "react";
import { DateTime } from "../../helper/date-time/DateTime";

const AgentNotificationComponent = () => {
  return (
    <section className="dashboard-interface">
      <div className="top">
        <div className="info-display">
          <p className="notificationText">Notification</p>
        </div>
        <div className="time">
          <DateTime></DateTime>
        </div>
        <div className="forTheprofileImage">
          <div id="profile-container">
            <img id="profileImage" src="/assets/newUser.png" />
          </div>
          <input
            id="imageUpload"
            type="file"
            name="profile_photo"
            placeholder="Photo"
            required
            capture
          />
          <span className="forTheAgentID">Funmi Bankole</span>
        </div>
      </div>
      <section className="notificationContainer">
        <div className="navContainer">
          <ul className="linksContainer">
            <li>
              <a href="#">All</a>
              <span className="notificationAmountAll">0</span>
            </li>
            <li>
              <a href="#">Unread</a>
              <span className="notificationAmount">0</span>
            </li>
            <li>
              <a href="#">Reports</a>
              <span className="notificationAmount totalReportNotification">
                0
              </span>
            </li>
          </ul>
        </div>
        <section className="theNotifications">
          <ul className="listWrapper">
            {/* <li class="usersReportListEntries unread">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path></svg>
              </div>
              <div>
                  <p><span class="usersIdentity">Anonymous User</span> made a report</p>
                  <p class="usersTimeOfReport">1 hr ago</p>
              </div>
          </li>
          */}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default AgentNotificationComponent;
