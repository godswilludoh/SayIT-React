import React from "react";
import { DateTime } from "../../helper/date-time/DateTime";

const AgentProfileComponent = () => {
  return (
    <section className="dashboard-interface">
      <div className="top">
        <div className="info-display">
          <p className="notificationText-forAgentProfile">AGENTS PROFILE</p>
        </div>
        <div className="time-forAgentProfile">
          <DateTime></DateTime>
        </div>
      </div>

      <section class="agentOrgContainer">
        <div className="agentAdressAndProfileImage">
          <p class="agentOrgAdress">
            EFCC HQ: No 6, Port Harcourt Crescent, Area 11, Garki, Abuja.
          </p>
        </div>

        <section className="agentAndOrgDetails">
        
          <div className="agentAndOrgDetailsWrapper">
            <div className="agentProfileInfo">
              <label htmlFor="username">Username</label>
              <p className="values">Funmi_EFCC</p>
            </div>

            <div className="agentProfileInfo">
              <label htmlFor="email">Email</label>
              <p className="values">Funmiefcc@gmail.com</p>
            </div>

            <div className="agentProfileInfo">
              <label htmlFor="password">Password</label>
              <p className="values">***************</p>
            </div>

            <div className="agentProfileInfo">
              <label htmlFor="fullname">Full Name</label>
              <p className="values">Funmi Bankole</p>
            </div>

            <div className="agentProfileInfo">
              <label htmlFor="organisation">Organisation</label>
              <p className="values">EFCC</p>
            </div>



          </div>

        </section>
      </section>
    </section>
  );
};

export default AgentProfileComponent;
