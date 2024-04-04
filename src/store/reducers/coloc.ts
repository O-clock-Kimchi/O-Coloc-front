import { createReducer } from '@reduxjs/toolkit';

import { IColoc } from '../../@types/coloc';

interface ColocState {
  coloc: IColoc;
}

export const initialState: ColocState = {
  coloc: {
    id: 2,
    name: 'Kimchi',
    code_validation: 12345678,
    created_at: 12042024,
    link: '',
  },
};

const colocReducer = createReducer(initialState, (builder) => {});

export default colocReducer;
