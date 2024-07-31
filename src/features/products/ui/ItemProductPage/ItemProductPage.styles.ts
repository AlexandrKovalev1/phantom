import styled from "styled-components";
import {theme} from "../../../../common/styles/Theme";

const Wrapper = styled.div`
	padding: 0 40px;
	width: 100%;
	height: 100%;
	display: grid;
	gap: 20px;
	grid-template-columns: auto 1fr;
	grid-template-rows: 140px auto 1fr;
	& > * {
		padding: 26px;
		border-radius: 20px;
		background-color: ${theme.darkMode.color.primary};
	}
	> :first-child {
		grid-area: 1/1/3/2;
		padding: 20px;
	}
	> :nth-child(2) {
		grid-area: 1/2/2/3;
	}
	> :nth-child(3) {
		grid-area: 2/ 2 / 3 / 3;
	}
	:last-child {
		grid-area: 3/ 1/ 4/ 3;
	}

	@media${theme.media.largeDesc} {
		grid-template-columns: auto;
		grid-template-rows: 100px auto auto 1fr;
		> :first-child {
			grid-area: 2/1/3/2;
			max-width: 100%;
			max-height: 330px;
		}
		> :nth-child(2) {
			grid-area: 1/1/2/2;
		}
		> :nth-child(3) {
			grid-area: 3/1/4/2;
		}
		:last-child {
			grid-area: 4/ 1/ 5/ 2;
		}
	}
`;

const CoverBlock = styled.div`
	max-width: 530px;
	max-height: 530px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Cover = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 20px;
`;
const HeadingBlock = styled.div`
	grid-area: 1/2/2/3;
	min-width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	span {
		color: ${theme.darkMode.color.secondary};
	}
`;

const DescriptionBlock = styled.div`
	height: min-content;
`;


export const S = {
    Wrapper,
    CoverBlock,
    Cover,
    HeadingBlock,
    DescriptionBlock
}