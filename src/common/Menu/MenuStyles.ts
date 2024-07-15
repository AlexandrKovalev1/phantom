import styled, { css } from 'styled-components';
import { theme } from '../styles/Theme';

const Wrapper = styled.div<{ isOpen?: boolean; type?: string }>`
	width: 100%;
	height: 100%;
	background-color: ${theme.darkMode.color.primary};
	padding-top: 75px;
`;

export const S = {
	Wrapper,
};
