import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';
import { IUser, ITask } from '../../@types/coloc';

// USER-RELATED ACTIONS

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

// Signup action
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

// Update user action

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

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Update Coloc for the name

const UPDATE_NAME_COLOC = 'UPDATE_NAME_COLOC';

interface UpdateColocName {
  colocId: number;
  name: string;
}

interface HandleMessage {
  message: string;
}

export const updateNameColoc = createAsyncThunk<HandleMessage, UpdateColocName>(
  UPDATE_NAME_COLOC,
  async ({ colocId, name }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/colocs/${colocId}`, {
        name,
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const CHANGE_NAME = 'CHANGE_NAME';

export const changeName = createAction<{ name: string }>(CHANGE_NAME);

// Update coloc for the code

// colocsRouter.patch('/colocs/:id/code', colocController.generateNewCode);

// coloc.update({ lien_coloc: code, groupe_code_valid: code });

// Get flatmates' list

const GET_FLATMATES_LIST = 'GET_FLATMATES_LIST';

interface FlatmatesListResponse {
  user_id: number;
  firstname: string;
  color: string;
}
export const getFlatmates = createAsyncThunk<FlatmatesListResponse[], number>(
  GET_FLATMATES_LIST,
  async (colocId: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<FlatmatesListResponse[]>(
        `/colocs/${colocId}/users`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const GENERATE_NEW_CODE = 'GENERATE_NEW_CODE';

export const generateNewCode = createAsyncThunk<{ newCode: string }, number>(
  GENERATE_NEW_CODE,
  async (colocId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/colocs/${colocId}/code`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// User reset password

// Action for user to ask the reset

const ASK_RESET_PASSWORD = 'ASK_RESET_PASSWORD';

interface ResetPasswordData {
  email: string;
}

export const askResetPassword = createAsyncThunk(
  ASK_RESET_PASSWORD,
  async (resetPasswordData: ResetPasswordData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        '/request-reset',
        resetPasswordData
      );

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Check if the token and date are matching

const CHECK_TOKEN_RESET = 'CHECK_TOKEN_RESET';

export const checkTokenReset = createAsyncThunk(
  CHECK_TOKEN_RESET,
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/validate-reset-token/${token}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

const RENEW_PASSWORD = 'RENEW_PASSWORD';

interface RenewFormData {
  userId: number;
  token: string;
  newPassword: string;
}

export const renewPassword = createAsyncThunk(
  RENEW_PASSWORD,
  async (renewFormData: RenewFormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        '/reset-password',
        renewFormData
      );

      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);

// Refresh Token -- trying something else

const REFRESH_TOKEN = 'REFRESH_TOKEN';

interface RefreshTokenData {
  accessToken: string;
  message: string;
}

export const refreshToken = createAsyncThunk<RefreshTokenData>(
  REFRESH_TOKEN,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/refresh-token');
      return response.data;
    } catch (error) {
      return rejectWithValue('Une erreur est survenue');
    }
  }
);
