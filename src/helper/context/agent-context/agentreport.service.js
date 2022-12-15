import axiosInstance from './axios-agentReport-config';

const loadReportData = async () => {
	try {
		let response = await axiosInstance.get('reports');
		console.log(response.data);
		return response;
	} catch (err) {
		console.log(err);
	}
};

export const reportStatus = async (id, status) => {
	try {
		let response = await axiosInstance.patch(`/reports/${id}/`, status);
		console.log(response.data);
		return response;
	} catch (err) {
		console.log(err);
	}
};

const loadSpecificAgentReport = async () => {
	try {
		let response = await axiosInstance.get('reports/agency');
		console.log(response.data);
		return response;
	} catch (err) {
		console.log(err);
	}
};

export const loadRegisteredAgent = async () => {
	try {
		let response = await axiosInstance.get('agency');
		console.log(response.data);
		return response;
	} catch (err) {
		console.log(err);
	}
};

export const currentlyLoggedInAgent = async () => {
	try {
		let response = await axiosInstance.get('auth/current-user');
		console.log(response.data);
		return response;
	} catch (err) {
		console.log(err);
	}
};

export const viewSpecificReportById = async (id) => {
	try {
		let response = await axiosInstance.get(`reports/${id}/`);
		console.log(response.data);
		return response;
	} catch (err) {
		console.log(err);
	}
};

// FOR THE ADMIN TO DELETE
// export const deleteSpecificReportById = async(id) =>{
//   try {
// let response = await axiosInstance.delete(`reports/${id}/`);
// console.log(response.data);
// return response
// } catch (err) {
// console.log(err)
// }
// }

export const AgentReportServices = {
	loadReportData,
	loadSpecificAgentReport,
	reportStatus,
	// deleteSpecificReportById,
};

export const RegisteredAgentService = {
	loadRegisteredAgent,
};

export const currentLoggedInAgent = {
	currentlyLoggedInAgent,
};

// export default AgentReportServices;
