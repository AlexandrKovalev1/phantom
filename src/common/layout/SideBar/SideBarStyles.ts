import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

const Aside = styled.aside`
	width: 265px;
	min-height: 100vh;
	height: 100%;
	grid-area: 1/1/3/2;
	background-color: #222222;
`;

const SideBarContentWrapper = styled.div`
	width: 100%;
	padding-top: 75px;
	position: sticky;
	top: 0;
`;

const UserInfoBlock = styled.div`
	padding: 10px 20px;
	width: 85%;
	min-height: 100px;
	background-color: ${theme.darkMode.backgroundBody};
	border-radius: 7px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 100px;
`;
const UserAvatarWrapper = styled.div`
	height: 70px;
	width: 70px;
	background-color: ${theme.darkMode.color.secondary};
	border-radius: 7px;
	overflow: hidden;
`;
const UserAvatar = styled.img`
	width: 100%;
	height: 100%;
`;
const UserData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const NickName = styled.span`
	color: ${theme.darkMode.color.secondary};
`;
const Balance = styled.span``;

export const S = {
	Aside,
	SideBarContentWrapper,
	UserAvatarWrapper,
	UserAvatar,
	UserInfoBlock,
	NickName,
	Balance,
	UserData,
};
