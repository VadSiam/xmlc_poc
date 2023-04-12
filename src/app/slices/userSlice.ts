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

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

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

  // localStorage.setItem('user', JSON.stringify(user));
  dispatch(setUser(user));
  navigate('/dashboard');
};

export const register = (name: string, email: string, password: string, isCompanyAdmin: boolean, navigate: any): AppThunk => (
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

  localStorage.setItem('user', JSON.stringify(user));
  dispatch(setUser(user));
  navigate('/dashboard');
};

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;

const getUserFromList = (email: string, password: string) => {
  const dynamicUser: User = JSON.parse(localStorage.getItem('user') ?? '{}')
  console.log('🚀 ~ file: userSlice.ts:75 ~ dynamicUser:', dynamicUser)
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
