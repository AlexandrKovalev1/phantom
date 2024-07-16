import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from '../common/styles/GlobalStyles';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../features/auth/model/authSlice';
import { Products } from '../common/layout/Main/products/ui/Products';

export const PATH = {
	ROOT: '/',
	LANGUAGE: '/language',
	RULES: '/rules',
	FAQ: '/FAQ',
	LOGIN: '/login',
	PRODUCTS: '/products',
	BALANCE: '/balance',
	NEWS: '/news',
	SUPPORT: '/support',
	SETTINGS: '/settings',
} as const;

//todo сделать защищенными роуты сайд бара
const DistributorOfPath = () => {
	const isAuth = useSelector(selectIsAuth);
	return isAuth ? <Navigate to={PATH.PRODUCTS} /> : <div>home</div>;
};

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
		children: [
			{
				path: PATH.ROOT,
				element: <DistributorOfPath />,
			},
			{
				element: <Products />,
				path: PATH.PRODUCTS,
			},
			{
				element: <div>balance</div>,
				path: PATH.BALANCE,
			},
			{
				element: <div>News</div>,
				path: PATH.NEWS,
			},
			{
				element: <div>Support</div>,
				path: PATH.SUPPORT,
			},
			{
				element: <div>Settings</div>,
				path: PATH.SETTINGS,
			},
		],
	},
]);
