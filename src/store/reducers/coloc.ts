import { createReducer } from '@reduxjs/toolkit';
import { createColoc } from '../action/actions';

interface ColocState {
  colocId: null | number;
  nameColoc: string;
  isCreated: boolean;
  errorMessage: string;
}

export const initialState: ColocState = {
  colocId: null,
  nameColoc: '',
  isCreated: false,
  errorMessage: '',
};

const colocReducer = createReducer(initialState, (builder) => {
  builder.addCase(createColoc.fulfilled, (state, action) => {
    state.isCreated = true;
    state.nameColoc = action.payload.name;
    state.colocId = action.payload.coloc_id;
  });
  builder.addCase(createColoc.rejected, (state, action) => {
    state.isCreated = false;
    state.errorMessage = action.payload as string;
  });
});

export default colocReducer;
