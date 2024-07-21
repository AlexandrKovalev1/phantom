import { NavLink } from 'react-router-dom';
import { S } from './NavigationStyles';
import { PATH } from '../../../../app/routes';
import { Icon } from '../../../components/Icon/Icon';

type Props = {};
export const Navigation = (props: Props) => {
	return (
		<nav>
			<S.List>
				<S.ListItem>
					<NavLink to={PATH.PRODUCTS}>
						<S.IconWrapper>
							<Icon iconId={'products'} width={'31px'} height={'32px'} viewBox={'0 0 31 32'} />
						</S.IconWrapper>
						<span>Products</span>
					</NavLink>
				</S.ListItem>
				<S.ListItem>
					<NavLink to={PATH.BALANCE}>
						<S.IconWrapper>
							<Icon iconId={'balance'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'} />
						</S.IconWrapper>
						<span>Balance</span>
					</NavLink>
				</S.ListItem>
				<S.ListItem>
					<NavLink to={PATH.NEWS}>
						<S.IconWrapper>
							<Icon iconId={'news'} width={'29px'} height={'36px'} viewBox={'0 0 29 36'} />
						</S.IconWrapper>
						<span>News</span>
					</NavLink>
				</S.ListItem>
				<S.ListItem>
					<NavLink to={PATH.SUPPORT}>
						<S.IconWrapper>
							<Icon iconId={'support'} width={'35px'} height={'36px'} viewBox={'0 0 35 36'} />
						</S.IconWrapper>
						<span>Support</span>
					</NavLink>
				</S.ListItem>
				<S.ListItem>
					<NavLink to={PATH.SETTINGS}>
						<S.IconWrapper>
							<Icon iconId={'settings'} width={'31px'} height={'36px'} viewBox={'0 0 31 36'} />
						</S.IconWrapper>
						<span>Settings</span>
					</NavLink>
				</S.ListItem>
			</S.List>
		</nav>
	);
};
