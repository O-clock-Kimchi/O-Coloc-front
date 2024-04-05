import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';

// USER-RELATED ACTIONS

// Interface pour login

const LOGIN = 'LOGIN';
// export const login = createAsyncThunk<dataType>('actionTyp', callbackfunction;

interface FormData {
  email: string;
  password: string;
}

export const login = createAsyncThunk<
  {
    firstname: string;
    isLogged: boolean;
    current_coloc_id: number;
  },
  FormData
>(LOGIN, async (formData) => {
  const response = await axiosInstance.post('/login', formData);
  console.log(response.data);
  return response.data;
});

const LOGOUT = 'LOGOUT';
export const logout = createAction(LOGIN);
