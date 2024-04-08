import { createReducer } from '@reduxjs/toolkit';
import { login, logout, signup } from '../action/actions';

interface UserState {
  isLogged: boolean;
  user: {
    firstname: string;
    colocId: null | number;
    color: string;
    email: string;
  };
}

export const initialState: UserState = {
  isLogged: false,
  user: {
    firstname: '',
    colocId: null,
    color: '',
    email: '',
  },
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      const { firstname, current_coloc_id, color, email } = action.payload.user;
      state.isLogged = true;
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
    })
    .addCase(logout, (state) => {
      state.isLogged = false;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';
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
    });
});

export default userReducer;
