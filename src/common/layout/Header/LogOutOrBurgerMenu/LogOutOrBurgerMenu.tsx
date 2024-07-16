import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useSelector } from 'react-redux';
import { selectDeviceType } from '../../../../app/appSlice';

export const LogOutOrBurgerMenu = () => {
	const deviceType = useSelector(selectDeviceType);
	const mobileMode = deviceType === 'mobile';

	return mobileMode ? <BurgerMenu /> : <div>log out</div>;
};
