import { S } from './SideBarStyles';
import { Menu } from '../../Menu/Menu';

type Props = {};
export const SideBar = ({}: Props) => {
	return (
		<S.Aside>
			<Menu />
		</S.Aside>
	);
};
