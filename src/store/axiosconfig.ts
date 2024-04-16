import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.log('Session cookie expired. Logging out user...');
//     }

//     return Promise.reject(error);
//   }
// );

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      const newConfig = { ...config };
      newConfig.headers.Authorization = `Bearer ${token}`;
      return newConfig;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 403 &&
      !originalRequest.retry
    ) {
      originalRequest.retry = true;

      try {
        console.log('The token has expired');
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
      } catch (removeTokenError) {
        console.log('Une erreur sur le token est survenue:', removeTokenError);
      }
    }
  }
);

export default axiosInstance;
