import { createReducer } from '@reduxjs/toolkit';

import { IUser } from '../../@types/coloc';

import { login, logout } from '../action/userAction';

interface UserState {
  user: IUser;
  isLogged: boolean;
  loggedMessage: null | string;
}

export const initialState: UserState = {
  user: {
    id: 3,
    firstname: 'bob',
    email: 'bob@ocoloc.com',
    password: 'bobi',
    color: '#FF0000',
    id_coloc: 2,
  },
  isLogged: false,
  loggedMessage: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state) => {
      state.isLogged = true;
      state.loggedMessage = `${state.user.firstname}`;
    })
    .addCase(logout, (state) => {
      state.isLogged = false;
      state.loggedMessage = null;
    });
});

export default userReducer;
