import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user';
import colocReducer from './coloc';
import tasksReducer from './tasks';
import passwordReducer from './password';

const reducer = combineReducers({
  userReducer,
  colocReducer,
  tasksReducer,
  passwordReducer,
});

export default reducer;
