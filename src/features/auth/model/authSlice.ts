import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'auth',
	initialState: {
		isAuth: true,
	},
	reducers: {},
	selectors: {
		selectIsAuth: state => state.isAuth,
	},
});

export const authReducer = slice.reducer;
export const { selectIsAuth } = slice.selectors;
