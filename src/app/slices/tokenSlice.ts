import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import mockTokens from '../../mocks/mockTokens';
import { Token } from '../../types/TokenTypes';

export interface TokenState {
  tokens: Token[];
}

const initialState: TokenState = {
  tokens: mockTokens.tokens,
};

export const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.tokens = action.payload;
    },
    addToken: (state, action: PayloadAction<Token>) => {
      state.tokens.push(action.payload);
    },
    updateToken: (state, action: PayloadAction<Token>) => {
      const updatedToken = action.payload;
      const index = state.tokens.findIndex((token) => token.id === updatedToken.id);
      if (index >= 0) {
        state.tokens[index] = updatedToken;
      }
    },
    deleteToken: (state, action: PayloadAction<string>) => {
      const tokenId = action.payload;
      state.tokens = state.tokens.filter((token) => token.id !== tokenId);
    },
  },
});

export const { setTokens, addToken, updateToken, deleteToken } = tokensSlice.actions;

export default tokensSlice.reducer;