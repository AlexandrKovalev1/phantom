import { createBrowserRouter, Navigate, RouteObject, Outlet } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from '../common/styles/GlobalStyles';

export const PATH = {
	ROOT: '/',
	LANGUAGE: '/language',
	RULES: '/rules',
	FAQ: '/FAQ',
	LOGIN: '/login',
} as const;

export const router = createBrowserRouter([
	{
		path: PATH.ROOT,
		element: (
			<>
				<GlobalStyle />
				<App />
			</>
		),
		errorElement: <Navigate to={'/error'} />,
		children: [{}],
	},
]);
