import { createReducer } from '@reduxjs/toolkit';
import { createColoc, getColoc, joinColoc } from '../action/actions';

interface ColocState {
  colocId: null | number;
  nameColoc: string;
  colocCode: string;
  isCreated: boolean;
  errorMessage: string;
  isLoading: boolean;
}

export const initialState: ColocState = {
  colocId: null,
  nameColoc: '',
  colocCode: '',
  isCreated: false,
  errorMessage: '',
  isLoading: false,
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
    });
});

export default colocReducer;
