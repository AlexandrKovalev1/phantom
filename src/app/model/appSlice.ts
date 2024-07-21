import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DeviceType = 'desktop' | 'mobile';
const slice = createSlice({
	name: 'app',
	initialState: {
		deviceType: 'desktop' as DeviceType,
	},
	reducers: create => ({
		setDeviceType: create.reducer((state, action: PayloadAction<{ deviceType: DeviceType }>) => {
			state.deviceType = action.payload.deviceType;
		}),
	}),
	selectors: {
		selectDeviceType: state => state.deviceType,
	},
});

export const appReducer = slice.reducer;
export const { setDeviceType } = slice.actions;
export const { selectDeviceType } = slice.selectors;
