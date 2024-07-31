
import * as React from 'react';
import {ReactNode, useEffect, useState} from 'react';
import { S } from './BurgerMenuStyles';
import {createPortal} from "react-dom";

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

	const handleSetIsOpen = () => {
		setIsOpen(prevState => !prevState);
	};

	return (
		<div>
			<S.Button $isOpen={isOpen} onClick={handleSetIsOpen}>
				<span></span>
			</S.Button>

			{isOpen && createPortal(<S.BurgerMenuBody></S.BurgerMenuBody>,document.getElementById('root')!)}
		</div>
	);
};
