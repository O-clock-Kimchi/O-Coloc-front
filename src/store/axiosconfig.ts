import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://172.25.192.189:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to git checkout bugfix_dispatch token in all routes

export default axiosInstance;
