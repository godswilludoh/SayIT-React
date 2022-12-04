import React, {useReducer} from "react";
import AgentReportContext from "./AgentReportContext";
import AgentReportReducer from "./AgentReportReducer";
import{
    ADD_REPORT,
    DELETE_REPORT,
    FIND_REPORT_BY_ID,
} from "./AgentReportTypes";

export const TodoState = ({ children }) => {
    const initialState = {
      reports: [],
      report: {},
    };
  
    const [state, dispatch] = useReducer(AgentReportReducer, initialState);

    // Now my pure functions

    const addReport = (reportObj) => {
        dispatch({ type: ADD_REPORT, payload: reportObj });
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
            addReport,
            deleteReport,           
            findReportByID,
            ...state,
          }}
        >
          {children}
        </AgentReportContext.Provider>
      );
}
