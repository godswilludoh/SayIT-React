import axiosInstance from "./axios-agentReport-config";

const loadReportData = async() =>{
      try {
    let response = await axiosInstance.get("reports");  
    // console.log(response.data); 
    return response
  } catch (err) {
    console.log(err)
  }
};

const AgentReportServices = {
    loadReportData,

}

export default AgentReportServices;