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

// Signup action
const SIGNUP = 'SIGNUP';

interface SignupData {
  firstname: string;
  email: string;
  password: string;
  color: string;
}

export const signup = createAsyncThunk(
  SIGNUP,
  async (signupData: SignupData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/signup', signupData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
