import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

export default axiosInstance;

// const getStoredCookie = () => {
//   return localStorage.getItem('authCookie');
// };

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const storedCookie = getStoredCookie();

//     if (storedCookie) {
//       config.headers.Cookie = storedCookie;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
