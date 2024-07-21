import { createHashRouter, Navigate } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from '../common/styles/GlobalStyles';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../features/auth/model/authSlice';
import { Products } from '../features/products/ui/Products';
import { CardsProductsPage } from '../features/products/ui/CardsProductsPage/CardsProductsPage';
import { ItemProductPage } from '../features/products/ui/ItemProductPage/ItemProductPage';

export const PATH = {
	ROOT: '/',
	LANGUAGE: '/language',
	RULES: '/rules',
	FAQ: '/FAQ',
	LOGIN: '/login',
	PRODUCTS: '/products',
	PRODUCT_PAGE: `:title/:id`,
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

export const router = createHashRouter([
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
				path: '/phantom/',
				element: <Navigate to={PATH.ROOT} />,
			},
			{
				path: PATH.ROOT,
				element: <DistributorOfPath />,
			},
			{
				element: <Products />,
				path: PATH.PRODUCTS,
				children: [
					{
						path: PATH.PRODUCTS,
						element: <CardsProductsPage />,
					},
					{
						path: PATH.PRODUCT_PAGE,
						element: <ItemProductPage />,
					},
				],
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
