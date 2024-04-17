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
  getFlatmates,
} from '../action/actions';
import { IUser } from '../../@types/coloc';

const storedColocData = localStorage.getItem('colocData');

interface ColocState {
  coloc: {
    colocId: null | number;
    nameColoc: string;
    colocCode: string;
  };
  isCreated: boolean;
  errorMessage: string | undefined;
  isLoading: boolean;
  isLeaving: boolean;
  isUpdated: boolean;
  flatmatesList: IUser[];
  error: string | null;
  successMessage: string;
}

const defaultColoc = {
  colocId: null,
  nameColoc: '',
  colocCode: '',
};

export const initialState: ColocState = {
  coloc: storedColocData ? JSON.parse(storedColocData) : defaultColoc,
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
      state.coloc.nameColoc = action.payload.name;
      state.coloc.colocId = action.payload.coloc_id;
      state.isLoading = false;

      const colocDataState = {
        ...state.coloc,
      };

      localStorage.setItem('colocData', JSON.stringify(colocDataState));
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
      state.coloc.nameColoc = action.payload.name;
      state.coloc.colocId = action.payload.coloc_id;
      state.isLoading = false;
      state.isLeaving = false;

      const colocDataState = {
        ...state.coloc,
      };

      localStorage.setItem('colocData', JSON.stringify(colocDataState));
    })
    .addCase(joinColoc.rejected, (state, action) => {
      state.isCreated = false;
      state.errorMessage = action.payload as string;
      state.isLoading = false;
    })
    .addCase(getColoc.pending, (state) => {
      state.coloc.colocId = null;
      state.coloc.nameColoc = '';
      state.coloc.colocCode = '';
      state.errorMessage = '';
      state.isLoading = true;
    })
    .addCase(getColoc.fulfilled, (state, action) => {
      state.coloc.colocId = action.payload.coloc_id;
      state.coloc.nameColoc = action.payload.name;
      state.coloc.colocCode = action.payload.groupe_code_valid;
      state.isLoading = false;

      const colocDataState = {
        ...state.coloc,
      };

      localStorage.setItem('colocData', JSON.stringify(colocDataState));
    })
    .addCase(getColoc.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    })
    .addCase(leaveColoc.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(leaveColoc.fulfilled, (state) => {
      state.coloc.colocId = null;
      state.coloc.nameColoc = '';
      state.coloc.colocCode = '';
      state.isLeaving = true;
      state.isLoading = false;

      localStorage.removeItem('colocData');
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

      const colocDataState = {
        ...state.coloc,
      };

      localStorage.setItem('colocData', JSON.stringify(colocDataState));
    })
    .addCase(updateNameColoc.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload as string;
      state.successMessage = '';
    })
    .addCase(changeName, (state, action) => {
      state.coloc.nameColoc = action.payload.name;
    })
    .addCase(generateNewCode.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(generateNewCode.fulfilled, (state, action) => {
      state.coloc.colocCode = action.payload.newCode;
      state.isUpdated = true;
      state.isLeaving = true;
      state.isLoading = false;

      const colocDataState = {
        ...state.coloc,
      };

      localStorage.setItem('colocData', JSON.stringify(colocDataState));
    })
    .addCase(generateNewCode.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
    })
    .addCase(logout.fulfilled, (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem('colocData');
    })
    .addCase(getFlatmates.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getFlatmates.fulfilled, (state, action) => {
      state.isLoading = false;
      state.flatmatesList = action.payload;
    })
    .addCase(getFlatmates.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
});

export default colocReducer;
