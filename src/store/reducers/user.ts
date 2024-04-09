import { createReducer } from '@reduxjs/toolkit';
import {
  changeField,
  destroyUser,
  login,
  logout,
  signup,
  updateUser,
} from '../action/actions';

interface UserState {
  isLogged: boolean;
  isUpdated: boolean;
  user: {
    userId: null | number;
    firstname: string;
    colocId: null | number;
    color: string;
    email: string;
  };
}

export const initialState: UserState = {
  isLogged: false,
  isUpdated: false,
  user: {
    userId: null,
    firstname: '',
    colocId: null,
    color: '',
    email: '',
  },
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeField, (state, action) => {
      state[action.payload.name] = action.payload.value;
    })
    .addCase(login.fulfilled, (state, action) => {
      const { user_id, firstname, current_coloc_id, color, email } =
        action.payload.user;
      state.isLogged = true;
      state.user.userId = user_id;
      state.user.firstname = firstname;
      state.user.colocId = current_coloc_id;
      state.user.color = color;
      state.user.email = email;
    })
    .addCase(login.rejected, (state) => {
      state.isLogged = false;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';
      state.user.userId = null;
    })
    .addCase(logout, (state) => {
      state.isLogged = false;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';
      state.user.userId = null;
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
    })
    .addCase(destroyUser.fulfilled, (state) => {
      state.isLogged = false;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';
      state.user.userId = null;
    });
});

export default userReducer;
