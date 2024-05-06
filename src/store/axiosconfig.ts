import axios from 'axios';

const BASE_API = 'https://o-coloc-back.onrender.com/';

const axiosInstance = axios.create({
  baseURL: BASE_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to git checkout bugfix_dispatch token in all routes

export default axiosInstance;
