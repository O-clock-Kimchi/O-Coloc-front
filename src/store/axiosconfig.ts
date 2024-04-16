import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

// Interceptor to dispatch token in all routes

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

// Interceptor to clean localstorage after token expires

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
