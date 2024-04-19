import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import axiosInstance from './axiosconfig';
import { refreshToken } from './action/actions';

const store = configureStore({
  reducer,
});

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

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

        await localStorage.getItem('accessToken');

        axiosInstance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;

        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (removeTokenError) {
        console.log(
          'An error occurred while removing the token:',
          removeTokenError
        );
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userData');
        localStorage.removeItem('colocData');
      }
    }
    return Promise.reject(error);
  }
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
