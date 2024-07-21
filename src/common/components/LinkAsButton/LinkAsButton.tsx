import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/Theme';

type Props = {
	title: string;
	to: string;
};

export const LinkAsButton = ({ title, to }: Props) => {
	return <LinkWrapper to={to}>{title}</LinkWrapper>;
};

const LinkWrapper = styled(Link)`
	max-width: 200px;
	width: 100%;
	height: 40px;
	text-align: center;
	line-height: 40px;
	background-color: ${theme.darkMode.color.secondary};
	border-radius: 15px;
`;
