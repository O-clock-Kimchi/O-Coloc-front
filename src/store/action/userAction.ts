import { createAction } from '@reduxjs/toolkit';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = createAction(LOGIN);

export const logout = createAction(LOGOUT);
