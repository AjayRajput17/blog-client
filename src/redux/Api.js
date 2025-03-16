import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  // baseURL: "https://blog-server-sa7e.onrender.com",
  baseURL: "http://3.109.155.96:5000",
  withCredentials: true,
})

export default axiosInstance;

