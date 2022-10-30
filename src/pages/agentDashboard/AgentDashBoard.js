import React from "react";

import "./AgentDashBoard.css";
import AgentDashBoardModal from "./AgentDashBoardModal";
import AgentDashBoardInterface from "./AgentDashBoardInterface";

const AgentDashBoard = () => {
  return (

    <div className="main-container">
      {/* <SideNavSection/> */}

      <AgentDashBoardInterface />

      <AgentDashBoardModal />
    </div>
    
  );
};

export default AgentDashBoard;
