import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';

// Login action
const LOGIN = 'LOGIN';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponseData {
  message: string;
  accessToken: string;
  status: number;
  user: {
    userId: number;
    firstname: string;
    currentColocId: number;
    color: string;
    email: string;
  };
}

export const login = createAsyncThunk<
  LoginResponseData,
  LoginFormData,
  {
    rejectValue: { status: number };
  }
>(LOGIN, async (loginFormData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/login', loginFormData);

    return {
      user: response.data.user,
      status: response.status,
      message: response.statusText,
      accessToken: response.data.accessToken,
    };
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

// Logout action
const LOGOUT = 'LOGOUT';

interface LogoutData {
  message: string;
}

export const logout = createAsyncThunk<LogoutData>(
  LOGOUT,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/logout');

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Signup

const SIGNUP = 'SIGNUP';

interface SignupData {
  firstname: string;
  email: string;
  password: string;
  color: string;
}

export const signup = createAsyncThunk<
  {
    status: number;
  },
  SignupData,
  {
    rejectValue: { status: number };
  }
>(SIGNUP, async (signupData: SignupData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/signup', signupData);
    return { status: response.status };
  } catch (error: any) {
    return rejectWithValue({ status: error.response.status });
  }
});

// Update user profile

const UPDATE_USER = 'UPDATE_USER';

interface UpdateDataUser {
  firstname: string;
  email: string;
  color: string;
}

export const updateUser = createAsyncThunk(
  UPDATE_USER,
  async (updateDataUser: UpdateDataUser, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/profile`, updateDataUser);
      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

interface FormField {
  value: string;
  name: 'email' | 'firstname' | 'color';
}

const CHANGE_FIELD = 'CHANGE_FIELD';

export const changeField = createAction<FormField>(CHANGE_FIELD);

// Destroy account

const DESTROY_USER = 'DESTROY_USER';

export const destroyUser = createAsyncThunk(
  DESTROY_USER,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/delete`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);
