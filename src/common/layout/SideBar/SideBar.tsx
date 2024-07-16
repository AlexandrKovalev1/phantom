import { S } from './SideBarStyles';
import { Link } from 'react-router-dom';
//@ts-ignore
import noPhoto from '../../../assets/img/noPhoto.jpeg';
import { Navigation } from './Navigation/Navigation';

type Props = {};
export const SideBar = ({}: Props) => {
	return (
		<S.Aside>
			<S.SideBarContentWrapper>
				<S.UserInfoBlock>
					<S.UserAvatarWrapper>
						<S.UserAvatar src={noPhoto} />
					</S.UserAvatarWrapper>
					<S.UserData>
						<S.NickName>Nickname</S.NickName>
						<S.Balance>Balance:180$</S.Balance>
					</S.UserData>
				</S.UserInfoBlock>
				<Navigation />
			</S.SideBarContentWrapper>
		</S.Aside>
	);
};
