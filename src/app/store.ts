import { configureStore, ThunkAction, AnyAction } from '@reduxjs/toolkit';
import rootReducer from './slices';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: rootReducer,
});

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook for typed dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
