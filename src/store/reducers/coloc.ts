import { createReducer } from '@reduxjs/toolkit';
import {
  changeName,
  createColoc,
  generateNewCode,
  getColoc,
  joinColoc,
  leaveColoc,
  updateNameColoc,
} from '../action/actions';
import { IUser } from '../../@types/coloc';

interface ColocState {
  colocId: null | number;
  nameColoc: string;
  colocCode: string;
  isCreated: boolean;
  errorMessage: string;
  isLoading: boolean;
  isLeaving: boolean;
  isUpdated: boolean;
  flatmatesList: IUser[];
  error: string | null;
}

export const initialState: ColocState = {
  colocId: null,
  nameColoc: '',
  colocCode: '',
  isCreated: false,
  errorMessage: '',
  isLoading: false,
  isLeaving: false,
  isUpdated: false,
  flatmatesList: [],
  error: null,
};

const colocReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createColoc.fulfilled, (state, action) => {
      state.isCreated = true;
      state.nameColoc = action.payload.name;
      state.colocId = action.payload.coloc_id;
    })
    .addCase(createColoc.rejected, (state, action) => {
      state.isCreated = false;
      state.errorMessage = action.payload as string;
    })
    .addCase(joinColoc.fulfilled, (state, action) => {
      state.isCreated = true;
      state.nameColoc = action.payload.name;
      state.colocId = action.payload.coloc_id;
    })
    .addCase(joinColoc.rejected, (state, action) => {
      state.isCreated = false;
      state.errorMessage = action.payload as string;
    })
    .addCase(getColoc.pending, (state) => {
      state.colocId = null;
      state.nameColoc = '';
      state.colocCode = '';
      state.errorMessage = '';
      state.isLoading = true;
    })
    .addCase(getColoc.fulfilled, (state, action) => {
      state.colocId = action.payload.coloc_id;
      state.nameColoc = action.payload.name;
      state.colocCode = action.payload.groupe_code_valid;
      state.isLoading = false;
    })
    .addCase(leaveColoc.fulfilled, (state) => {
      state.colocId = null;
      state.nameColoc = '';
      state.colocCode = '';
      state.isLeaving = true;
    })
    .addCase(updateNameColoc.fulfilled, (state) => {
      state.isUpdated = true;
    })
    .addCase(changeName, (state, action) => {
      state.nameColoc = action.payload.name;
    })
    .addCase(generateNewCode.fulfilled, (state, action) => {
      state.colocCode = action.payload.newCode;
      state.isUpdated = true;
      state.isLeaving = true;
    });
  // .addCase(getFlatmates.pending, (state) => {
  //   state.isLoading = true;
  //   state.error = null;
  // })
  // .addCase(getFlatmates.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.flatmatesList = action.payload;
  // })
  // .addCase(getFlatmates.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload as string; // Assurez-vous que le payload est de type string
  // });
});

export default colocReducer;
