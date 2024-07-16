import styled, { css } from 'styled-components';
import { IsAuth } from '../../types/types';
import { theme } from '../../styles/Theme';

export const Main = styled.main<IsAuth>`
	grid-area: 2/2/3/3;
	${props =>
		!props.$isAuth &&
		css<IsAuth>`
			grid-area: 2/1/3/2;
		`}
`;
