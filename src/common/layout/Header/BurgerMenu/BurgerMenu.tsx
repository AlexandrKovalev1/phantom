// @flow
import * as React from 'react';
import { S } from './BurgerMenuStyles';
import { SideBar } from '../../SideBar/SideBar';
import { Menu } from '../../../Menu/Menu';
import { useState } from 'react';

type Props = {};
export const BurgerMenu = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const onClickHandled = () => {
		setIsOpen(prevState => !prevState);
	};
	return (
		<div>
			<S.Button isOpen={isOpen} onClick={onClickHandled}>
				<span></span>
			</S.Button>
			{isOpen && (
				<S.BurgerMenuBody>
					<Menu />
				</S.BurgerMenuBody>
			)}
		</div>
	);
};
