import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://blog-server-9z66.onrender.com",
  withCredentials: true,
})

export default axiosInstance;

