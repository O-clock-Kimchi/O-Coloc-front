import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';

// Check if token and date are matching

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

// Refresh token

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
