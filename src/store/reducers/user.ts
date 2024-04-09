import { createReducer } from '@reduxjs/toolkit';
import {
  changeField,
  destroyUser,
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
    .addCase(signup.fulfilled, (state, action) => {
      state.isLogged = false;
      state.firstname = action.payload.firstname;
      state.colocId = action.payload.current_coloc_id;
      state.color = action.payload.color;
      state.email = action.payload.email;
    })
    .addCase(signup.rejected, (state) => {
      state.isLogged = false;
      state.firstname = '';
      state.colocId = null;
      state.color = '';
      state.email = '';
    })
    .addCase(updateUser.fulfilled, (state) => {
      state.isUpdated = true;
    })
    .addCase(destroyUser.fulfilled, (state) => {
      state.isLogged = false;
      state.firstname = '';
      state.colocId = null;
      state.color = '';
      state.email = '';
      state.userId = null;
    });
});

export default userReducer;
