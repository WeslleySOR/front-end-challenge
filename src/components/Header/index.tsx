import { Container, MenuButton } from "./style";

import avatarWhite from "../../assets/avatar_white.svg";
import logoParking from "../../assets/logo_parking.svg";
import shapeImg from "../../assets/Shape.svg";
import { MenuContext } from "../../contexts/Menu";
import { useContext } from "react";


export function Header() {
	const { menu, updateMenu } = useContext(MenuContext)

	return (
		<Container>
			<img className="avatar-logo-mobile" src={avatarWhite} alt="Avatar logo" />
			<img
				className="avatar-logo-desktop"
				src={logoParking}
				alt="Avatar logo"
			/>
			<MenuButton
				name="Button to open and close menu"
				onClick={updateMenu}
				isOpened={menu}
			>
				<img
					className="first-shape"
					src={shapeImg}
					alt="First Shape of Hamburguer menu"
				/>
				<img
					className="second-shape"
					src={shapeImg}
					alt="Second Shape of Hamburguer menu"
				/>
				<img
					className="third-shape"
					src={shapeImg}
					alt="Third Shape of Hamburguer menu"
				/>
			</MenuButton>
		</Container>
	);
}
