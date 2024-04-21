import { createReducer } from '@reduxjs/toolkit';

import askResetPassword from '../actions/newPasswordActions';
import { checkTokenReset } from '../actions/tokenActions';

interface PasswordState {
  tokenPassword: string;
  tokenPasswordValidity: string;
  error: string | null;
  isTokenValid: boolean;
  isResetAsked: boolean;
}

const initialState: PasswordState = {
  tokenPassword: '',
  tokenPasswordValidity: '',
  error: null,
  isTokenValid: false,
  isResetAsked: false,
};

const passwordReducer = createReducer(initialState, (builder) => {
  builder.addCase(askResetPassword.fulfilled, (state) => {
    state.isResetAsked = true;
  });
  builder.addCase(checkTokenReset.fulfilled, (state) => {
    state.isTokenValid = true;
    state.error = null;
    state.isResetAsked = false;
  });
  builder.addCase(checkTokenReset.rejected, (state) => {
    state.isTokenValid = false;
    state.error = 'Une erreur est survenue';
    state.isResetAsked = false;
  });
});

export default passwordReducer;
