import { createReducer } from '@reduxjs/toolkit';
import { askResetPassword } from '../action/actions';

interface PasswordState {
  tokenPassword: string;
  tokenPasswordValidity: string;
  error: string | null;
  isReset: boolean;
}

const initialState: PasswordState = {
  tokenPassword: '',
  tokenPasswordValidity: '',
  error: null,
  isReset: false,
};

const passwordReducer = createReducer(initialState, (builder) => {
  builder.addCase(askResetPassword.fulfilled, (state, action) => {
    state.tokenPassword = action.payload.resetToken;
    state.tokenPasswordValidity = action.payload.resetTokenExpires;
    state.isReset = true;
  });
});

export default passwordReducer;
