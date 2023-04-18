import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { AppThunk, RootState } from '../store';
import { User } from '../../types/UserTypes';
import { NavigateFunction } from 'react-router-dom';
import { knownUsers } from '../../mocks/mockUsers';


interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}

const savedUser = sessionStorage.getItem('user');
const initialState: UserState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isAuthenticated: !!savedUser,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      sessionStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      sessionStorage.setItem('user', '');
    },
    updateUserBalance: (state, action: PayloadAction<{ userId: number; symbol: string; amount: number }>) => {
      const findToken = state.user?.tokenBalances?.find((token) => token.tokenId === action.payload.symbol);
      const updatedToken = findToken
        ? { tokenId: action.payload.symbol, balance: findToken.balance + action.payload.amount }
        : { tokenId: action.payload.symbol, balance: action.payload.amount }
      const updatedTokenBalances = findToken
        ? ((state.user?.tokenBalances ?? []).map((token) => {
          if (token.tokenId === action.payload.symbol) {
            return updatedToken;
          }
          return token;
        }))
        : [
          ...(state.user?.tokenBalances ?? []),
          updatedToken,
        ]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.user = {
        ...state.user,
        tokenBalances: updatedTokenBalances,
      }
    },
    updateUserBalanceSwap: (state, action: PayloadAction<{ userId: number; fromToken: string; toToken: string; amount: number }>) => {
      const findToken = state.user?.tokenBalances?.find((token) => token.tokenId === action.payload.toToken);
      const updatedToken = findToken
        ? { tokenId: action.payload.toToken, balance: findToken.balance + action.payload.amount }
        : { tokenId: action.payload.toToken, balance: action.payload.amount }
      const updatedTokenBalances = findToken
        ? ((state.user?.tokenBalances ?? []).map((token) => {
          if (token.tokenId === action.payload.toToken) {
            return updatedToken;
          }
          return token;
        }))
        : [
          ...(state.user?.tokenBalances ?? []),
          updatedToken,
        ]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.user = {
        ...state.user,
        tokenBalances: updatedTokenBalances,
      }
    }
  }
});

export const { setUser, logout, updateUserBalance, updateUserBalanceSwap } = userSlice.actions;

export const login = (
  email: string,
  password: string,
  navigate: NavigateFunction
): AppThunk => (dispatch: Dispatch) => {
  // Mock login process
  // In a real-world application, you would make an API call to verify the user's credentials
  const user = getUserFromList(email, password)
  if (!user) {
    return null;
  }

  dispatch(setUser(user));
  navigate('/dashboard');
};

export const register = (name: string, email: string, password: string, isCompanyAdmin: boolean, navigate: NavigateFunction): AppThunk => (
  dispatch: Dispatch,
) => {
  // Mock registration process
  // In a real-world application, you would make an API call to register the user
  const user = {
    name,
    email,
    password,
    isCompanyAdmin,
  };

  sessionStorage.setItem('user', JSON.stringify(user));
  dispatch(setUser(user));
  navigate('/dashboard');
};

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;

const getUserFromList = (email: string, password: string) => {
  const dynamicUser: User = JSON.parse(sessionStorage.getItem('user') || '{}')
  const checkUserForEmail = [...knownUsers, dynamicUser].find(u => u.email === email)
  if (!checkUserForEmail) {
    return null;
  }
  const checkPassword = checkUserForEmail.password === password;
  if (!checkPassword) {
    return null;
  }
  return checkUserForEmail;
}
