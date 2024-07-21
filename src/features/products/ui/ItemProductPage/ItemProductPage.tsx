// @flow
import * as React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../common/styles/Theme';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../app/store';
import { selectProducts } from '../../model/productsSlice';
import { useEffect } from 'react';

type Props = {};
export const ItemProductPage = (props: Props) => {
	const { id: idProduct } = useParams();
	const products = useAppSelector(selectProducts);
	const product = products.find(p => p.id === idProduct);
	useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}, []);

	return (
		<Wrapper>
			<CoverBlock>
				<Cover src={product?.cover} />
			</CoverBlock>
			<HeadingBlock>
				<h2>{product?.Title}</h2>
				<span>{product?.Type}</span>
			</HeadingBlock>
			<PurchaseBlock></PurchaseBlock>
			<DescriptionBlock>{product?.description}</DescriptionBlock>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	padding: 0 40px;
	width: 100%;
	height: 100%;
	display: grid;
	gap: 20px;
	grid-template-columns: auto 1fr;
	grid-template-rows: 140px 280px 1fr;
	& > * {
		padding: 26px;
		border-radius: 20px;
		background-color: ${theme.darkMode.color.primary};
	}

	@media${theme.media.largeDesc} {
		grid-template-columns: auto;
		grid-template-rows: 100px auto 200px 1fr;
	}
`;

const CoverBlock = styled.div`
	grid-area: 1/1/3/2;
	max-width: 530px;
	max-height: 460px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media${theme.media.largeDesc} {
		grid-area: 2/1/3/2;
		max-width: 100%;
		max-height: 330px;
	}
`;
const Cover = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 20px;
`;
const HeadingBlock = styled.div`
	grid-area: 1/2/2/3;
	min-width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	span {
		color: ${theme.darkMode.color.secondary};
	}
	@media${theme.media.largeDesc} {
		grid-area: 1/1/2/2;
	}
`;
const PurchaseBlock = styled.div`
	grid-area: 2/ 2 / 3 / 3;
	@media${theme.media.largeDesc} {
		grid-area: 3/1/4/2;
	}
`;

const DescriptionBlock = styled.div`
	grid-area: 3/ 1/ 4/ 3;
	height: min-content;
	@media${theme.media.largeDesc} {
		grid-area: 4/ 1/ 5/ 2;
	}
`;
