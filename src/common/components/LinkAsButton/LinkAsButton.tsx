import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/Theme';

type Props = {
	title: string;
	to: string;
	width?:number
};

export const LinkAsButton = ({ title, to,width }: Props) => {
	return <LinkWrapper to={to} style={{maxWidth:`${width}px`}}>{title}</LinkWrapper>;
};

const LinkWrapper = styled(Link)`
	max-width: 200px;
	display: inline-block;
	width: 100%;
	height: 40px;
	text-align: center;
	line-height: 40px;
	background-color: ${theme.darkMode.color.secondary};
	border-radius: 15px;
`;
