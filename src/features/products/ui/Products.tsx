import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { productsThunks } from '../model/productsSlice';
import { useAppDispatch } from '../../../app/store';

type Props = {};
export const Products = (props: Props) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(productsThunks.fetchProducts());
	}, []);
	return (
		<>
			<Outlet />
		</>
	);
};
