import { createReducer } from '@reduxjs/toolkit';
import {
  changeField,
  login,
  logout,
  signup,
  updateUser,
} from '../action/actions';
import randomHexColor from '../../utils/randomHex';

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
      const { firstname, current_coloc_id, color, email } = action.payload.user;
      state.isLogged = true;
      state.user.firstname = firstname;
      state.user.colocId = current_coloc_id;
      state.user.color = color;
      state.user.email = email;
      state.userId = action.payload.user_id;
    })
    .addCase(login.rejected, (state) => {
      state.isLogged = false;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';
      state.userId = null;
    })
    .addCase(logout, (state) => {
      state.isLogged = false;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';
      state.userId = null;
      localStorage.clear();
    })
    .addCase(signup.fulfilled, (state, action) => {
      state.isLogged = false;
      state.user.firstname = action.payload.firstname;
      state.user.colocId = action.payload.current_coloc_id;
      state.user.color = action.payload.color;
      state.user.email = action.payload.email;
    })
    .addCase(signup.rejected, (state) => {
      state.isLogged = false;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';
    })
    .addCase(updateUser.fulfilled, (state) => {
      state.isUpdated = true;
    });
});

export default userReducer;
