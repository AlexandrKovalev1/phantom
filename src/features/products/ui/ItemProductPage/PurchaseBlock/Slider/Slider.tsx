import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import { theme } from '../../../../../../common/styles/Theme';

type Props = {
	onChange: (event: Event, value: number | number[], activeThumb: number) => void;
};
const marks = [
	{
		value: 3,
		label: '3',
	},
	{
		value: 14,
		label: '14',
	},
	{
		value: 30,
		label: '30',
	},
	{
		value: 90,
		label: '90',
	},
	{
		value: 180,
		label: '180',
	},
];

export const CustomSlider = ({ onChange }: Props) => {
	return (
		<div>
			<span>Select number of days</span>
			<StyledSlider
				min={0}
				max={185}
				aria-label='Custom marks'
				defaultValue={marks[1].value}
				step={null}
				valueLabelDisplay='auto'
				marks={marks}
				onChange={onChange}
			/>
		</div>
	);
};

const StyledSlider = styled(Slider)`

	&.MuiSlider-root {
		color: ${theme.darkMode.color.secondary};
	}

	& .MuiSlider-rail {
		background-color: inherit;
		width: 100%;
		height: 12px;
		border: 1px solid ${theme.darkMode.color.secondary};
	}

	& .MuiSlider-markLabel {
		color:${theme.darkMode.color.text};
		font-weight: bold;
	}

	& .MuiSlider-mark {
		display: none;
	}

	.MuiSlider-valueLabel {
		background-color: ${theme.darkMode.color.secondary};
	}

	.css-hzp7sc-MuiSlider-mark{
		display: none;
	}

	.MuiSlider-track {
		opacity: 0;
	}

	.MuiSlider-thumb {
		width: 16px;
		height: 30px;
		border-radius: 10px;
	}
`;
