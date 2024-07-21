import { ProductCard } from './ProductCard/ProductCard';
import { useAppDispatch, useAppSelector } from '../../../../app/store';
import { productsThunks, selectProducts } from '../../model/productsSlice';
import { useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../../../common/styles/Theme';

export const CardsProductsPage = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector(selectProducts);
	useEffect(() => {
		dispatch(productsThunks.fetchProducts());
	}, []);

	return (
		<ProductsWrapper>
			{products.map(p => (
				<ProductCard product={p} key={p.id} />
			))}
		</ProductsWrapper>
	);
};

const ProductsWrapper = styled.div`
	padding: 0 30px;
	display: grid;
	gap: 45px;
	grid-template-columns: repeat(auto-fill, minmax(280px, auto));
	justify-content: center;

	@media ${theme.media.tablet} {
		padding: 0 15px;
	}
`;
