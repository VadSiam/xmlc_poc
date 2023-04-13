import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import tokenReducer from './tokenSlice';
import tokenManagementReducer from './tokenManagementSlice';

const rootReducer = combineReducers({
  user: userReducer,
  tokens: tokenReducer,
  tokenManagement: tokenManagementReducer,
});

export default rootReducer;
