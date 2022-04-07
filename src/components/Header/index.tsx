import { Container, MenuButton } from "./style";

import avatarWhite from "../../assets/avatar_white.svg";
import logoParking from "../../assets/logo_parking.svg";
import shapeImg from "../../assets/Shape.svg";

interface HeaderProps {
	isOpenedMenu: boolean;
	handleOpenedMenu: () => void;
}

export function Header({ isOpenedMenu, handleOpenedMenu }: HeaderProps) {
	return (
		<Container>
			<img className="avatar-logo-mobile" src={avatarWhite} alt="Avatar logo" />
			<img
				className="avatar-logo-desktop"
				src={logoParking}
				alt="Avatar logo"
			/>
			<MenuButton onClick={handleOpenedMenu} isOpened={isOpenedMenu}>
				<img className="first-shape" src={shapeImg} alt="" />
				<img className="second-shape" src={shapeImg} alt="" />
				<img className="third-shape" src={shapeImg} alt="" />
			</MenuButton>
		</Container>
	);
}
