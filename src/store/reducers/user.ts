import { createReducer } from '@reduxjs/toolkit';
import {
  changeField,
  login,
  logout,
  register,
  updateUser,
} from '../action/actions';

interface UserState {
  isLogged: boolean;
  firstname: string;
  colocId: null | number;
  color: string;
  email: string;
  userId: null | number;
  isUpdated: boolean;
}

export const initialState: UserState = {
  isLogged: false,
  firstname: '',
  colocId: null,
  color: '',
  email: '',
  userId: null,
  isUpdated: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeField, (state, action) => {
      state[action.payload.name] = action.payload.value;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLogged = true;
      state.firstname = action.payload.firstname;
      state.colocId = action.payload.current_coloc_id;
      state.color = action.payload.color;
      state.email = action.payload.email;
      state.userId = action.payload.user_id;
      // localStorage.setItem('firstname', action.payload.firstname);
    })
    .addCase(login.rejected, (state) => {
      state.isLogged = false;
      state.firstname = '';
      state.colocId = null;
      state.color = '';
      state.email = '';
      state.userId = null;
    })
    .addCase(logout, (state) => {
      state.isLogged = false;
      state.firstname = '';
      state.colocId = null;
      state.color = '';
      state.email = '';
      state.userId = null;
      localStorage.clear();
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isLogged = true;
      state.firstname = action.payload.firstname;
      state.email = action.payload.email;
    })
    .addCase(register.rejected, (state) => {
      state.isLogged = false;
      state.firstname = '';
      state.email = '';
    })
    .addCase(updateUser.fulfilled, (state) => {
      state.isUpdated = true;
    });
});

export default userReducer;
