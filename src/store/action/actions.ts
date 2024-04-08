import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';

// USER-RELATED ACTIONS

// Login action
const LOGIN = 'LOGIN';

interface LoginFormData {
  email: string;
  password: string;
}

export const login = createAsyncThunk<
  {
    firstname: string;
    isLogged: boolean;
    current_coloc_id: number;
    color: string;
    email: string;
  },
  LoginFormData
>(LOGIN, async (loginformData) => {
  const response = await axiosInstance.post('/login', loginformData);
  console.log(response.data);
  return response.data.user;
});

// Logout action
const LOGOUT = 'LOGOUT';
export const logout = createAction(LOGOUT);

// Register action
const REGISTER = 'REGISTER';

interface RegisterFormData {
  firstname: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk<
  {
    firstname: string;
    isLogged: boolean;
    email: string;
  },
  RegisterFormData
>(REGISTER, async (registerFormData) => {
  const response = await axiosInstance.post('/signup', registerFormData);
  console.log(response.data);
  return response.data;
});
