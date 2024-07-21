import { Product } from '../../../model/productsSlice';
import styled, { css } from 'styled-components';
import { theme } from '../../../../../common/styles/Theme';
import { LinkAsButton } from '../../../../../common/components/LinkAsButton/LinkAsButton';
import { S } from './ProductCard.styles';

type Props = {
	product: Product;
};
export const ProductCard = ({ product }: Props) => {
	const { cover, Title, Type, subscribeStatus, daysLeft, id } = product;
	return (
		<S.CardWrapper>
			<S.CoverImg src={cover} alt='cover-product' />
			<S.BlockInfo>
				<h2>{Title}</h2>
				<h3>{Type}</h3>

				<S.SubscribeStatus $status={subscribeStatus}>
					Subscribe status:{<span> {subscribeStatus}</span>}
				</S.SubscribeStatus>
				{subscribeStatus !== 'None active' && <span>Days left:{daysLeft} days</span>}
			</S.BlockInfo>
			<S.ButtonWrapper>
				<LinkAsButton title={'Buy'} to={`${Title}/${id}`} />
			</S.ButtonWrapper>
		</S.CardWrapper>
	);
};
