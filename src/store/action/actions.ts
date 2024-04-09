import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';

// USER-RELATED ACTIONS

// Login action
const LOGIN = 'LOGIN';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponseData {
  message: string;
  user: {
    firstname: string;
    current_coloc_id: number;
    color: string;
    email: string;
    user_id: number;
  };
}

export const login = createAsyncThunk<
  LoginResponseData,
  LoginFormData,
  {
    rejectValue: { message: string };
  }
>(LOGIN, async (loginFormData: LoginFormData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/login', loginFormData);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
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

// Update user action

const UPDATE_USER = 'UPDATE_USER';

interface UpdateDataUser {
  firstname: string;
  email: string;
  color: string;
}

interface UpdateUserWithId {
  userId: number;
  updateDataUser: UpdateDataUser;
}

export const updateUser = createAsyncThunk(
  UPDATE_USER,
  async ({ userId, updateDataUser }: UpdateUserWithId) => {
    const response = await axiosInstance.put(
      `/user/${userId}/profile`,
      updateDataUser
    );
    console.log(response.data);
    return response.data;
  }
);

interface FormField {
  value: string;
  name: 'email' | 'firstname' | 'color';
}

const CHANGE_FIELD = 'CHANGE_FIELD';

export const changeField = createAction<FormField>(CHANGE_FIELD);
