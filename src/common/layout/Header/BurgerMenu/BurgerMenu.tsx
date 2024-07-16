// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { S } from './BurgerMenuStyles';

type Props = {};
export const BurgerMenu = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isOpen]);

	const onClickHandled = () => {
		setIsOpen(prevState => !prevState);
	};
	return (
		<div>
			<S.Button $isOpen={isOpen} onClick={onClickHandled}>
				<span></span>
			</S.Button>
			{isOpen && <S.BurgerMenuBody></S.BurgerMenuBody>}
		</div>
	);
};
