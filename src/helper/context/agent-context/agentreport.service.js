import axiosInstance from "./axios-agentReport-config";

const loadReportData = async() =>{
      try {
    let response = await axiosInstance.get("reports");  
    console.log(response.data); 
    return response
  } catch (err) {
    console.log(err)
  }
};



export const loadRegisteredAgent = async() =>{
  try {
let response = await axiosInstance.get("agency");  
console.log(response.data); 
return response
} catch (err) {
console.log(err)
}
};






export const AgentReportServices = {
    loadReportData,

}

export const RegisteredAgentService = {
  loadRegisteredAgent,
}

// export default AgentReportServices;