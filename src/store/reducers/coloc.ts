import { createReducer } from '@reduxjs/toolkit';
import { createColoc } from '../action/actions';

interface ColocState {
  coloc: {
    colocId: null | number;
    name: string;
    code_validation: null | number;
    created_at: null;
    link: string;
  };
  isCreated: boolean;
}

export const initialState: ColocState = {
  coloc: {
    colocId: null,
    name: '',
    code_validation: null,
    created_at: null,
    link: '',
  },
  isCreated: false,
};

const colocReducer = createReducer(initialState, (builder) => {
  builder.addCase(createColoc.fulfilled, (state, action) => {
    state.isCreated = true;
    state.coloc.name = action.payload.name;
    state.coloc.colocId = action.payload.coloc_id;
  });
});

export default colocReducer;
