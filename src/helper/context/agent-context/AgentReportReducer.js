import {
  ADD_REPORT,
  DELETE_REPORT,
  FIND_REPORT_BY_ID,
  LOAD_REPORT,
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

    case ADD_REPORT:
      return {
        ...state,
        reports: [...reports, payload], //To be reviewed
      };

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
