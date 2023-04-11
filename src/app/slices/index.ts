import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import tokenReducer from './tokenSlice';

const rootReducer = combineReducers({
  user: userReducer,
  tokens: tokenReducer,
});

export default rootReducer;
