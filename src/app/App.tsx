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
import { useSetDeviceType } from './useSetDeviceType';
import { selectDeviceType } from './model/appSlice';

function App() {
	useSetDeviceType();
	const deviceType = useSelector(selectDeviceType);
	const isAuth = useSelector(selectIsAuth);
	const desktopMode = isAuth && deviceType === 'desktop';

	return (
		<AppWrapper $isAuth={isAuth}>
			<Header />
			{desktopMode && <SideBar />}
			<Main $isAuth={isAuth} $deviceType={deviceType}>
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
		`}

	@media ${theme.media.tablet} {
		display: block;
	}
`;

export default App;
