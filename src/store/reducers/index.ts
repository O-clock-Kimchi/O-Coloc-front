import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user';
import colocReducer from './coloc';
import tasksReducer from './tasks';

const reducer = combineReducers({
  userReducer,
  colocReducer,
  tasksReducer,
});

export default reducer;
