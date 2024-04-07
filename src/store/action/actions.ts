import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';

// USER-RELATED ACTIONS

// Login action
const LOGIN = 'LOGIN';

interface FormData {
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
  FormData
>(LOGIN, async (formData) => {
  const response = await axiosInstance.post('/login', formData);
  console.log(response.data);
  return response.data;
});

// Logout action
const LOGOUT = 'LOGOUT';
export const logout = createAction(LOGOUT);
