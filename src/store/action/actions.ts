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
    user_id: number;
    firstname: string;
    current_coloc_id: number;
    color: string;
    email: string;
  };
}

export const login = createAsyncThunk<
  LoginResponseData,
  LoginFormData,
  {
    rejectValue: { message: string };
  }
>(LOGIN, async (loginFormData, { rejectWithValue }) => {
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

export const logout = createAsyncThunk(
  LOGOUT,
  async (userId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/user/${userId}/logout`);

      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

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

// DESTROY ACCOUNT

// /user/5/delete

const DESTROY_USER = 'DESTROY_USER';

export const destroyUser = createAsyncThunk(
  DESTROY_USER,
  async (userId: number) => {
    const response = await axiosInstance.delete(`user/${userId}/delete`);
    console.log(response.data);
    return response.data;
  }
);

// COLOC RELATED ACTIONS

// Created Coloc

const CREATE_COLOC = 'CREATE_COLOC';

interface GetColocData {
  name: string;
  coloc_id: number;
}

interface CreateFormData {
  name: string;
}

export const createColoc = createAsyncThunk<GetColocData, CreateFormData>(
  CREATE_COLOC,
  async (createFormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/colocs/create`,
        createFormData
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Votre nom de coloc n'est pas correct");
    }
  }
);

// Join Coloc

const JOIN_COLOC = 'JOIN_COLOC';

interface GetJoinData {
  coloc_id: number;
  name: string;
}

interface PostFormData {
  groupe_code_valid: string;
}

export const joinColoc = createAsyncThunk<GetJoinData, PostFormData>(
  JOIN_COLOC,
  async (postFormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/colocs/join`, postFormData);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Get Coloc

const GET_COLOC = 'GET_COLOC';

interface GetDataFromColoc {
  coloc_id: number;
  name: string;
  groupe_code_valid: string;
}

export const getColoc = createAsyncThunk<GetDataFromColoc, number>(
  GET_COLOC,
  async (colocId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/colocs/${colocId}`);

      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Leave coloc
// colocsRouter.post('/colocs/:id/leave', colocController.handleUserLeave);

const LEAVE_COLOC = 'LEAVE_COLOC';

export const leaveColoc = createAsyncThunk(
  LEAVE_COLOC,
  async (colocId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`colocs/${colocId}/leave`);

      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);
