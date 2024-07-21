import styled, { css } from 'styled-components';
import { theme } from '../../../../../common/styles/Theme';

const CardWrapper = styled.div`
	padding: 25px 25px 45px;
	max-width: 350px;
	height: 500px;
	width: 100%;
	background-color: ${theme.darkMode.color.primary};
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	gap: 30px;
`;
const CoverImg = styled.img`
	width: 100%;
	height: 200px;
	border-radius: 15px;
`;
const SubscribeStatus = styled.span<{ $status: 'Active' | 'None active' | 'On update' }>`
	${props =>
		props.$status === 'Active' &&
		css`
			span {
				color: #06b677;
			}
		`}
	${props =>
		props.$status === 'None active' &&
		css`
			span {
				color: #ff0000;
			}
		`}
    ${props =>
		props.$status === 'On update' &&
		css`
			span {
				color: #faff01;
			}
		`}
`;
const BlockInfo = styled.div`
	display: flex;
	flex-direction: column;

	h3 {
		padding-bottom: 20px;
		color: ${theme.darkMode.color.secondary};
	}
`;
const ButtonWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

export const S = {
	CardWrapper,
	CoverImg,
	SubscribeStatus,
	BlockInfo,
	ButtonWrapper,
};
