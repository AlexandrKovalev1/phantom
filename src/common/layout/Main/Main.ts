import styled, { css } from 'styled-components';
import { IsAuth } from '../../types/types';
import { DeviceType } from '../../../app/model/appSlice';

export const Main = styled.main<IsAuth & { $deviceType: DeviceType }>`
	grid-area: 2/2/3/3;
	${props =>
		props.$deviceType === 'mobile' &&
		css`
			padding-top: 80px;
			height: 100vh;
		`}
	${props =>
		!props.$isAuth &&
		css`
			grid-area: 2/1/3/2;
		`}
`;
