import { createReducer } from '@reduxjs/toolkit';
import {
  changeName,
  createColoc,
  generateNewCode,
  getColoc,
  joinColoc,
  leaveColoc,
  logout,
  updateNameColoc,
} from '../action/actions';
import { IUser } from '../../@types/coloc';

interface ColocState {
  colocId: null | number;
  nameColoc: string;
  colocCode: string;
  isCreated: boolean;
  errorMessage: string | undefined;
  isLoading: boolean;
  isLeaving: boolean;
  isUpdated: boolean;
  flatmatesList: IUser[];
  error: string | null;
  successMessage: string;
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
  successMessage: '',
};

const colocReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createColoc.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createColoc.fulfilled, (state, action) => {
      state.isCreated = true;
      state.nameColoc = action.payload.name;
      state.colocId = action.payload.coloc_id;
      state.isLoading = false;
    })
    .addCase(createColoc.rejected, (state, action) => {
      state.isCreated = false;
      state.errorMessage = action.payload as string;
    })
    .addCase(joinColoc.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(joinColoc.fulfilled, (state, action) => {
      state.isCreated = true;
      state.nameColoc = action.payload.name;
      state.colocId = action.payload.coloc_id;
      state.isLoading = false;
    })
    .addCase(joinColoc.rejected, (state, action) => {
      state.isCreated = false;
      state.errorMessage = action.payload as string;
      state.isLoading = false;
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
    .addCase(getColoc.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    })
    .addCase(leaveColoc.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(leaveColoc.fulfilled, (state) => {
      state.colocId = null;
      state.nameColoc = '';
      state.colocCode = '';
      state.isLeaving = true;
      state.isLoading = false;
    })
    .addCase(leaveColoc.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    })
    .addCase(updateNameColoc.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = '';
      state.successMessage = '';
    })
    .addCase(updateNameColoc.fulfilled, (state) => {
      state.isUpdated = true;
      state.isLoading = false;
      state.errorMessage = '';
      state.successMessage = 'Mise à jour réussie';
    })
    .addCase(updateNameColoc.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload as string;
      state.successMessage = '';
    })
    .addCase(changeName, (state, action) => {
      state.nameColoc = action.payload.name;
    })
    .addCase(generateNewCode.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(generateNewCode.fulfilled, (state, action) => {
      state.colocCode = action.payload.newCode;
      state.isUpdated = true;
      state.isLeaving = true;
      state.isLoading = false;
    })
    .addCase(generateNewCode.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    })
    .addCase(logout.fulfilled, (state) => {
      Object.assign(state, initialState);
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
