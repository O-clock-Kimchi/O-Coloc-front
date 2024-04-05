import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from '../action/actions';

interface UserState {
  isLogged: boolean;
  firstname: string;
  colocId: null | number;
  color: string;
}

export const initialState: UserState = {
  isLogged: false,
  firstname: '',
  colocId: null,
  color: '',
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      state.isLogged = true;
      state.firstname = action.payload.firstname;
      state.colocId = action.payload.current_coloc_id;
      state.color = action.payload.color;
    })
    .addCase(logout, (state) => {
      state.isLogged = false;
      state.firstname = '';
      state.colocId = null;
      state.color = '';
    });
});

export default userReducer;
