import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';

// Create new coloc

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

// Join coloc

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

// Get coloc data

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

// Update coloc's name

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

// Update coloc's secret code

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
