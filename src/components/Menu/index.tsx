import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../contexts/Menu";
import { Container } from "./style";

export function MobileMenu() {
	const { menu, updateMenu } = useContext(MenuContext)
	let navigate = useNavigate();

	const handleMenuNavigate = (link: string) => {
		navigate(link);
		updateMenu();
	};

	return (
		<Container isOpened={menu}>
			<button onClick={() => handleMenuNavigate("/")}>
				<span>Entrada</span>
			</button>
			<button onClick={() => handleMenuNavigate("/exit")}>
				<span>Saída</span>
			</button>
		</Container>
	);
}
