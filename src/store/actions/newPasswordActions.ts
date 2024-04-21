import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosconfig';

// Ask password

const ASK_RESET_PASSWORD = 'ASK_RESET_PASSWORD';

interface ResetPasswordData {
  email: string;
}

const askResetPassword = createAsyncThunk(
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

export default askResetPassword;
