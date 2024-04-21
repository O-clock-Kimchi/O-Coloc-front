import axiosInstance from '../axiosconfig';

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

const tokenInterceptors = () => {
  // Interceptor to add authorization token to requests
  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = getAccessToken();
      if (accessToken) {
        const newConfig = { ...config };
        newConfig.headers.Authorization = `Bearer ${accessToken}`;
        return newConfig;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Interceptor to handle token expiration and clean local storage
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response && error.response.status === 403) {
        try {
          console.log('Attempting to refresh the token...');
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userData');
          localStorage.removeItem('colocData');
          window.location.reload();
        } catch (removeTokenError) {
          console.log(
            'An error occurred while removing the token:',
            removeTokenError
          );
        }
      }
      return Promise.reject(error);
    }
  );
};

export default tokenInterceptors;
