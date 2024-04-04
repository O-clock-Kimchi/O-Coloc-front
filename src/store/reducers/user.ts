import { createReducer } from '@reduxjs/toolkit';

import { IUser } from '../../@types/coloc';

interface UserState {
  user: IUser;
  logged: boolean;
  loggedMessage: null | string;
}

export const initialState: UserState = {
  user: {
    id: 1,
    firstname: 'bob',
    email: 'bob@ocoloc.com',
    password: 'bobi',
    color: '#FF0000',
    id_coloc: 2,
  },
  logged: false,
  loggedMessage: null,
};

const userReducer = createReducer(initialState, (builder) => {});

export default userReducer;
