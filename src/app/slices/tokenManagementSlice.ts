import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Token } from '../../types/TokenTypes';

interface TokenManagementState {
  tokens: Token[];
}

const initialState: TokenManagementState = {
  tokens: [], // You can populate this with initial tokens if needed
};

export const tokenManagementSlice = createSlice({
  name: 'tokenManagement',
  initialState,
  reducers: {
    createToken: (state, action: PayloadAction<Token>) => {
      state.tokens.push(action.payload);
    },
    editToken: (state, action: PayloadAction<Token>) => {
      const index = state.tokens.findIndex((token) => token.id === action.payload.id);
      if (index !== -1) {
        state.tokens[index] = action.payload;
      }
    },
    deleteToken: (state, action: PayloadAction<string>) => {
      state.tokens = state.tokens.filter((token) => token.id !== action.payload);
    },
  },
});

export const { createToken, editToken, deleteToken } = tokenManagementSlice.actions;

export const selectTokens = (state: RootState) => state.tokenManagement.tokens;

export default tokenManagementSlice.reducer;
