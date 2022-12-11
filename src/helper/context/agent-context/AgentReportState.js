import React, { useReducer } from "react";
import { FaLessThanEqual } from "react-icons/fa";
import AgentReportContext from "./AgentReportContext";
import AgentReportReducer from "./AgentReportReducer";
import {
  LOAD_REPORT,
  DELETE_REPORT,
  FIND_REPORT_BY_ID,
} from "./AgentReportTypes";

export const AgentReportProvider = ({ children }) => {
  const initialState = {
    reports: [],
    report: {},
  };
 


  const [state, dispatch] = useReducer(AgentReportReducer, initialState);

  // Now my pure functions

  const loadReport = (reportArr) => {
    dispatch({ type: LOAD_REPORT, payload: reportArr });
  };

  const deleteReport = (reportId) => {
    dispatch({ type: DELETE_REPORT, payload: reportId });
  };

  const findReportByID = (reportId) => {
    dispatch({ type: FIND_REPORT_BY_ID, payload: reportId });
  };

  return (
    <AgentReportContext.Provider
      value={{
        reports: state.reports,
        loadReport,
        deleteReport,
        findReportByID,
        ...state,
      }}
    >
      {children}
    </AgentReportContext.Provider>
  );
};
