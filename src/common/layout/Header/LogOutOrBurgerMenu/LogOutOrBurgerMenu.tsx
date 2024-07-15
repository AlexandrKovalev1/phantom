import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useDeviceType } from '../../../utils/hooks/useDeviceType';

export const LogOutOrBurgerMenu = () => {
	const { deviceType } = useDeviceType();
	const mobileMode = deviceType === 'mobile';

	return mobileMode ? <BurgerMenu /> : <div>log out</div>;
};
