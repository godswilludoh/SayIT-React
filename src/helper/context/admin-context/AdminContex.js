import { createContext, useEffect, useState} from "react";
import axios from "../../../utility/api/axios";
import AgentReportContext from "../agent-context/AgentReportContext";

export const ReportProvider = ({children}) =>{
const [submitedReports, setSubmittedReports] = useState ({});



	useEffect(() => {
		axios.get("/v1/reports",   {headers: {
			Authorization : `Bearer ${localStorage.getItem("accessToken")}`
			}})
		.then((response) => {
		  console.log("responses", response.data);
		  setSubmittedReports(response.data);
		});
	  }, []);

return(

    <AgentReportContext.Provider
        value ={{
            submitedReports,
            setSubmittedReports
        }}
    >
    {children}
    </AgentReportContext.Provider>
)

    };

export const AdminContext = createContext();
