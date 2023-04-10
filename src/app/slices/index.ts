import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// Import other slice reducers as needed

const rootReducer = combineReducers({
  user: userReducer,
  // Add other slice reducers here
});

export default rootReducer;
