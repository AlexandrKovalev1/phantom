import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';

const Button = styled.button<{ $isOpen: boolean }>`
	position: absolute;
	top: 0;
	right: 0;
	width: 24px;
	height: 25px;
	transform: translate(-100%, 50%);
	z-index: 1099999;
	cursor: pointer;

	&:hover span {
		background-color: ${theme.darkMode.color.secondary};
	}

	&:hover span:before,
	&:hover span:after {
		background-color: ${theme.darkMode.color.secondary};
	}

	span {
		display: block;
		width: 24px;
		height: 3px;
		background-color: ${theme.darkMode.color.icons};
		position: absolute;
		left: 0;
		bottom: 0;

		&:before {
			content: '';
			display: block;
			width: 24px;
			height: 3px;
			background-color: ${theme.darkMode.color.icons};
			position: absolute;
			transform: translateY(-10px);
		}

		&:after {
			content: '';
			display: block;
			width: 24px;
			height: 3px;
			background-color: ${theme.darkMode.color.icons};
			position: absolute;
			right: 0;
			transform: translateY(10px);
		}
	}

	${props =>
		props.$isOpen &&
		css`
			&:hover span {
				background-color: rgba(225, 225, 225, 0);
			}

			span {
				background-color: rgba(225, 225, 225, 0);

				&:before {
					height: 4px;
					transform: rotate(45deg) translateY(0);
				}

				&:after {
					width: 24px;
					height: 4px;
					transform: rotate(-45deg) translateY(0);
				}
			}
		`}
`;

const BurgerMenuBody = styled.div`
	position: fixed;
	top: 75px;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: ${theme.darkMode.color.primary};
`;

export const S = {
	Button,
	BurgerMenuBody,
};
