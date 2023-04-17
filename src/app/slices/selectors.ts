import { RootState } from "../store";

export const selectUser = (state: RootState) => state.user.user;

export const selectTokens = (state: RootState) => state.tokens.tokens;
