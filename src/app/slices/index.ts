import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import tokenReducer from './tokenSlice';
import tokenManagementReducer from './tokenManagementSlice';
import newsCampaignsReducer from './newsCampaignsSlice';

const rootReducer = combineReducers({
  user: userReducer,
  tokens: tokenReducer,
  tokenManagement: tokenManagementReducer,
  newsCampaigns: newsCampaignsReducer,
});

export default rootReducer;
