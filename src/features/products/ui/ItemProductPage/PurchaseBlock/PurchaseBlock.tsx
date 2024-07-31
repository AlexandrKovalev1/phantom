import styled from 'styled-components';
import {CustomSlider} from './Slider/Slider';
import {useState} from 'react';
import {LinkAsButton} from "../../../../../common/components/LinkAsButton/LinkAsButton";
import {theme} from "../../../../../common/styles/Theme";


export const PurchaseBlock = () => {
    const [price, setPrice] = useState(28);

    const handleOnSliderChange = (event: Event, value: number | number[], activeThumb: number) => {
        if (typeof value === 'number') {
            setPrice(2 * value);
        }
    };
    return (
        <Wrapper>
            <h3>Buy</h3>
            <CustomSlider onChange={handleOnSliderChange}/>
            <Price>Price {<b>{price}$</b>}</Price>
            <ButtonsWrapper>
                <LinkAsButton title={'Buy'} to={'/'} width={138}/>
                <CustomCheckbox>
                    <input type="checkbox" id={'customCheckbox'} name={'customCheckbox'}/>
                    <label htmlFor={'customCheckbox'}>I understand and take full responsibility for this translation in
                        accordance with the rules of this site</label>
                </CustomCheckbox>
            </ButtonsWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
`;

const Price = styled.span`
    b{
        color: ${theme.darkMode.color.secondary};
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 36px;
    flex-wrap:wrap;
    
	:first-child{
		flex-shrink: 0;
	}
`
const CustomCheckbox = styled.div`
    input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    input + label {
        display: inline-flex;
        user-select: none;
		max-width: 400px;
		min-width: 210px;
    }
	input+label::before {
		content: '';
		display: inline-block;
		width: 22px;
		height: 22px;
		flex-shrink: 0;
		flex-grow: 0;
		border: 1px solid ${theme.darkMode.color.text};
		border-radius: 5px;
		margin-right: 0.5em;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 50% 50%;
		cursor: pointer;
	}
	input:checked+label::before {
		border-color: ${theme.darkMode.color.secondary};
		background-color: ${theme.darkMode.color.secondary};
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
	}
`;