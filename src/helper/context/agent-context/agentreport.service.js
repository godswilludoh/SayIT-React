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


const loadSpecificAgentReport = async () =>{
  try {
    let response = await axiosInstance.get("reports/agency");  
    console.log(response.data); 
    return response
  } catch (err) {
    console.log(err)
  }
}


export const loadRegisteredAgent = async() =>{
  try {
let response = await axiosInstance.get("agency");  
console.log(response.data); 
return response
} catch (err) {
console.log(err)
}
};



export const currentlyLoggedInAgent = async() =>{
  try {
let response = await axiosInstance.get("auth/current-user");  
console.log(response.data); 
return response
} catch (err) {
console.log(err)
}
}




export const AgentReportServices = {
    loadReportData,
    loadSpecificAgentReport,

}

export const RegisteredAgentService = {
  loadRegisteredAgent,
}

export const currentLoggedInAgent = {
  currentlyLoggedInAgent,
}




// export default AgentReportServices;