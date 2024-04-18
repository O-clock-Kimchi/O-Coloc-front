import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

// Interceptor to git checkout bugfix_dispatch token in all routes

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const newConfig = { ...config };
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
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
        console.log('The token has expired. Please reconnect');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userData');
        localStorage.removeItem('colocData');
        console.log('utilisateur déconnecté');
      } catch (removeTokenError) {
        console.log('Une erreur sur le token est survenue:', removeTokenError);
      }
    }
  }
);

export default axiosInstance;
