import { createSlice } from '@reduxjs/toolkit';
import { Token } from '../../types/TokenTypes';
import { tokens } from '../../mocks/mockTokens';

export interface TokenState {
  tokens: Token[];
}

const initialState: TokenState = {
  tokens,
};

export const tokenSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    // Add token actions here if needed
  },
});

// Export any needed actions
// export const {} = tokenSlice.actions;

export default tokenSlice.reducer;
