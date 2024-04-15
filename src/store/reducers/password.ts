import { createReducer } from '@reduxjs/toolkit';
import { askResetPassword } from '../action/actions';

interface PasswordState {
  tokenPassword: string;
  tokenPasswordValidity: string;
  error: string | null;
  isResetting: boolean;
}

const initialState: PasswordState = {
  tokenPassword: '',
  tokenPasswordValidity: '',
  error: null,
  isResetting: false,
};

const passwordReducer = createReducer(initialState, (builder) => {
  builder.addCase(askResetPassword.fulfilled, (state, action) => {
    state.tokenPassword = action.payload.resetToken;
    state.tokenPasswordValidity = action.payload.resetTokenExpires;
    state.isResetting = true;
  });
});

export default passwordReducer;
