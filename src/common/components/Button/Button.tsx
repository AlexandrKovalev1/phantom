import React from 'react';
import styled from 'styled-components';

type Props = {
	title: string;
	clickFunc: () => void;
};

export const Button = ({ title, clickFunc }: Props) => {
	function onClockHandler() {
		clickFunc();
	}

	return <ButtonWrapper onClick={onClockHandler}>{title}</ButtonWrapper>;
};

const ButtonWrapper = styled.button``;
