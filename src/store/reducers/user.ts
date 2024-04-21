import { createReducer } from '@reduxjs/toolkit';

import {
  changeField,
  destroyUser,
  login,
  logout,
  signup,
  updateUser,
} from '../actions/userActions';
import { createColoc, joinColoc, leaveColoc } from '../actions/colocActions';
import { refreshToken } from '../actions/tokenActions';

import axiosInstance from '../axiosconfig';

const storedToken = localStorage.getItem('accessToken');
const storedUserData = localStorage.getItem('userData');

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
  isRefresh: boolean;
}
const defaultUser = {
  userId: null,
  firstname: '',
  colocId: null,
  color: '',
  email: '',
};

export const initialState: UserState = {
  isLogged: !!storedToken,
  isUpdated: false,
  isRefresh: false,
  user: storedUserData ? JSON.parse(storedUserData) : defaultUser,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeField, (state, action) => {
      (state.user as any)[action.payload.name] = action.payload.value;
    })
    .addCase(login.fulfilled, (state, action) => {
      const { userId, firstname, currentColocId, color, email } =
        action.payload.user;

      state.isLogged = true;
      state.user.userId = userId;
      state.user.firstname = firstname;
      state.user.colocId = currentColocId;
      state.user.color = color;
      state.user.email = email;

      const userDataState = {
        ...state.user,
      };

      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('userData', JSON.stringify(userDataState));
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

      localStorage.clear();
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

      const userDataState = {
        ...state.user,
      };

      localStorage.setItem('userData', JSON.stringify(userDataState));
    })
    .addCase(destroyUser.fulfilled, (state) => {
      state.isLogged = false;
      state.user.userId = null;
      state.user.firstname = '';
      state.user.colocId = null;
      state.user.color = '';
      state.user.email = '';

      localStorage.removeItem('accessToken');
      localStorage.removeItem('userData');
    })
    .addCase(createColoc.fulfilled, (state, action) => {
      state.user.colocId = action.payload.coloc_id;

      const userDataState = {
        ...state.user,
      };

      localStorage.setItem('userData', JSON.stringify(userDataState));
    })
    .addCase(joinColoc.fulfilled, (state, action) => {
      state.user.colocId = action.payload.coloc_id;

      const userDataState = {
        ...state.user,
      };

      localStorage.setItem('userData', JSON.stringify(userDataState));
    })
    .addCase(leaveColoc.fulfilled, (state) => {
      state.isLogged = true;
      state.user.colocId = null;

      const userDataState = {
        ...state.user,
      };

      localStorage.setItem('userData', JSON.stringify(userDataState));
    })
    .addCase(refreshToken.pending, (state) => {
      state.isRefresh = true;
    })
    .addCase(refreshToken.fulfilled, (state, action) => {
      state.isLogged = true;
      state.isRefresh = false;

      localStorage.setItem('accessToken', action.payload.accessToken);

      axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        'accessToken'
      )}`;
    })
    .addCase(refreshToken.rejected, (state) => {
      state.isRefresh = false;
      state.isLogged = false;

      localStorage.removeItem('accessToken');
      localStorage.removeItem('userData');
      localStorage.removeItem('colocData');
    });
});

export default userReducer;
