import {
  LOAD_REPORT,
  DELETE_REPORT,
  FIND_REPORT_BY_ID
  
} from "./AgentReportTypes";

const AgentReportReducer = (state, action) => {
  const { reports } = state;
  const { type, payload } = action;

  switch (type) {
    case LOAD_REPORT:
      return {
        ...state,
        reports:payload,
      }

    case DELETE_REPORT:
      return {
        ...state,
        reports: reports.filter((report) => report.id !== payload),
      };

    case FIND_REPORT_BY_ID:
      return {
        ...state,
        reports: reports.find((report) => report.id === payload),
      };

    default:
      return state;
  }
};

export default AgentReportReducer;
