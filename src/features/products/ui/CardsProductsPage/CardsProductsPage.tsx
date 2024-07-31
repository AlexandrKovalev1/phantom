import { ProductCard } from './ProductCard/ProductCard';
import styled from 'styled-components';
import { theme } from '../../../../common/styles/Theme';
import { useAppSelector } from '../../../../app/store';
import { selectProducts } from '../../model/productsSlice';

export const CardsProductsPage = () => {
	const products = useAppSelector(selectProducts);
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
