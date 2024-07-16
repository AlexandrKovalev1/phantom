import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../../Container/Container';
import { IsAuth } from '../../types/types';

const Header = styled.header<IsAuth>`
	grid-area: 1/1/2/2;
	background-color: ${theme.darkMode.color.primary};
	height: 75px;
	position: relative;

	${props =>
		props.$isAuth &&
		css<IsAuth>`
			grid-area: 1/2/2/3;
			position: sticky;
			top: 0;
			background-color: ${theme.darkMode.backgroundBody};
		`}

	@media ${theme.media.tablet} {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
`;
const HeaderContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const LogoImg = styled.img``;
const NavLoginBlock = styled.div`
	display: flex;
	gap: 140px;

	@media ${theme.media.tablet} {
		gap: 70px;
	}

	@media ${theme.media.mobile} {
		gap: 30px;
	}
`;
const Nav = styled.nav``;
const NavList = styled.ul`
	display: flex;
	gap: 60px;
	@media ${theme.media.tablet} {
		gap: 30px;
	}
	@media ${theme.media.mobile} {
		gap: 18px;
	}
`;
const LogoWrapper = styled.div<IsAuth>`
	${props =>
		props.$isAuth &&
		css<IsAuth>`
			flex-grow: 1;
			display: flex;
			justify-content: center;
		`}
`;

const ListItem = styled.li``;

export const S = {
	Header,
	HeaderContainer,
	LogoWrapper,
	LogoImg,
	NavLoginBlock,
	Nav,
	ListItem,
	NavList,
};
