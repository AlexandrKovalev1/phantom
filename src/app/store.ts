import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './model/appSlice';
import { authReducer } from '../features/auth/model/authSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { productsReducer } from '../features/products/model/productsSlice';

export const store = configureStore({
	reducer: {
		app: appReducer,
		auth: authReducer,
		products: productsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
