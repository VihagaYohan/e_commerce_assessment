import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
