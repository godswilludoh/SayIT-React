import axios from 'axios';

// axios instance
const axiosInstance = axios.create({
    baseURL: "http://191.101.241.157:4500/v1/",
    headers: {
        Accepted: "application/json",
        "Content-Type": "application/json",
        Authorization : `Bearer ${localStorage.getItem("accessToken")}`
    },
});

export default axiosInstance;