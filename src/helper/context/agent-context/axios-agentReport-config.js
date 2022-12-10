import axios from 'axios';

// axios instance
const axiosInstance = axios.create({
    baseURL: "https://say-it-production.up.railway.app/v1/",
    headers: {
        Accepted: "application/json",
        "Content-Type": "application/json",
        Authorization : `Bearer ${localStorage.getItem("accessToken")}`
    },
});

export default axiosInstance;