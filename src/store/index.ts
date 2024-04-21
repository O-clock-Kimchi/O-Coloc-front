import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import axiosInstance from './axiosconfig';
import { refreshToken } from './action/actions';
import tokenInterceptors from './interceptors/axiosInterceptors';

const store = configureStore({
  reducer,
});

tokenInterceptors();

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
