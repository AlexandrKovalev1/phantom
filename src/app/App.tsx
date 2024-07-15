import React from 'react';
import { Header } from '../common/layout/Header/Header';
import { Outlet } from 'react-router-dom';
import { Main } from '../common/layout/Main/Main';
import { SideBar } from '../common/layout/SideBar/SideBar';
import styled, { css } from 'styled-components';
import { IsAuth } from '../common/types/types';
import { theme } from '../common/styles/Theme';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../features/auth/model/authSlice';
import { useDeviceType } from '../common/utils/hooks/useDeviceType';

function App() {
	const isAuth = useSelector(selectIsAuth);
	const { deviceType } = useDeviceType();
	const desktopMode = isAuth && deviceType === 'desktop';

	return (
		<AppWrapper $isAuth={isAuth}>
			<Header />
			{desktopMode && <SideBar />}
			<Main $isAuth={isAuth}>
				<Outlet />
			</Main>
		</AppWrapper>
	);
}

const AppWrapper = styled.div<IsAuth>`
	position: relative;
	display: grid;
	grid-template-rows: 75px 1fr;
	grid-template-columns: 1fr;

	${props =>
		props.$isAuth &&
		css<IsAuth>`
			grid-template-columns: auto 4fr;
		`} @media ${theme.media.tablet} {
		grid-template-columns: 1fr;
	}
`;

export default App;
