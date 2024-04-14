import { createReducer } from '@reduxjs/toolkit';
import {
  changeField,
  createColoc,
  destroyUser,
  joinColoc,
  leaveColoc,
  login,
  logout,
  signup,
  updateUser,
} from '../action/actions';
import randomHexColor from '../../utils/randomHex';

interface UserState {
  isLogged: boolean;
  user: {
    userId: number | null;
    firstname: string;
    colocId: null | number;
    color: string;
    email: string;
  };
  isUpdated: boolean;
}

export const initialState: UserState = {
  isLogged: false,
  user: {
    userId: null,
    firstname: '',
    colocId: null,
    color: '',
    email: '',
  },
  isUpdated: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeField, (state, action) => {
      (state.user as any)[action.payload.name] = action.payload.value;
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
      state.user.userId = null;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';
    })
    .addCase(logout.fulfilled, (state) => {
      state.isLogged = false;
      state.user.userId = null;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';
    })
    .addCase(signup.fulfilled, (state) => {
      state.isLogged = false;
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
      state.user.userId = null;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';
    })
    .addCase(createColoc.fulfilled, (state, action) => {
      state.user.colocId = action.payload.coloc_id;
    })
    .addCase(joinColoc.fulfilled, (state, action) => {
      state.user.colocId = action.payload.coloc_id;
    })
    .addCase(leaveColoc.fulfilled, (state) => {
      state.isLogged = true;
      state.user.colocId = null;
    });
});

export default userReducer;
