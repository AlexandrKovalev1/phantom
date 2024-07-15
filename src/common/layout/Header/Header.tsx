import { S } from './HeaderStyles';
import { Link } from 'react-router-dom';
//@ts-ignore
import logo from '../../../assets/img/Logo.png';
//@ts-ignore
import logoAfterLogin from '../../../assets/img/LogoAfterLogin.png';
import { PATH } from '../../../app/routes';
import { IsAuth } from '../../types/types';
import { LogOutOrBurgerMenu } from './LogOutOrBurgerMenu/LogOutOrBurgerMenu';
import { useDeviceType } from '../../utils/hooks/useDeviceType';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../../features/auth/model/authSlice';

type Props = {};
export const Header = ({}: Props) => {
	const isAuth = useSelector(selectIsAuth);
	const LogoImg = isAuth ? logoAfterLogin : logo;

	return (
		<S.Header $isAuth={isAuth}>
			<S.HeaderContainer width={'1024px'}>
				<S.LogoWrapper $isAuth={isAuth}>
					<Link to={'/'}>
						<S.LogoImg src={LogoImg} />
					</Link>
				</S.LogoWrapper>
				{!isAuth && (
					<S.NavLoginBlock>
						<S.Nav>
							<S.NavList>
								<S.ListItem>
									<Link to={PATH.LANGUAGE}>EN</Link>
								</S.ListItem>
								<S.ListItem>
									<Link to={PATH.RULES}>Rules</Link>
								</S.ListItem>
								<S.ListItem>
									<Link to={PATH.FAQ}>FAQ</Link>
								</S.ListItem>
							</S.NavList>
						</S.Nav>
						<Link to={PATH.LOGIN}>log in</Link>
					</S.NavLoginBlock>
				)}
				{isAuth && <LogOutOrBurgerMenu />}
			</S.HeaderContainer>
		</S.Header>
	);
};
