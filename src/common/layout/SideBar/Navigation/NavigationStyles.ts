import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 36px;
	width: 100%;
`;

const ListItem = styled.li`
	display: flex;
	align-items: center;
	width: 100%;

	& > a {
		display: flex;
		align-items: center;
		justify-content: start;
		padding-left: 50px;
		gap: 20px;
		position: relative;
		width: 100%;
		min-height: 50px;
	}

	& > a.active:before {
		content: '';
		display: block;
		position: absolute;
		height: 100%;
		width: 12px;
		left: 0;
		background-color: ${theme.darkMode.color.secondary};
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	& > a.active {
	}
`;

const IconWrapper = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 10px;
	background-color: ${theme.darkMode.color.secondary};
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const S = {
	List,
	ListItem,
	IconWrapper,
};
