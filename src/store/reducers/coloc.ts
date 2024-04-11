import { createReducer } from '@reduxjs/toolkit';
import { createColoc } from '../action/actions';

interface ColocState {
  colocId: null | number;
  nameColoc: string;
  isCreated: boolean;
}

export const initialState: ColocState = {
  colocId: null,
  nameColoc: '',
  isCreated: false,
};

const colocReducer = createReducer(initialState, (builder) => {
  builder.addCase(createColoc.fulfilled, (state, action) => {
    state.isCreated = true;
    state.nameColoc = action.payload.name;
    state.colocId = action.payload.coloc_id;
  });
});

export default colocReducer;
