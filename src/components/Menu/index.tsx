import { useNavigate } from "react-router-dom";
import { Container } from "./style";

interface MobileMenuProps {
	handleOpenedMenu: () => void;
	isOpened: boolean;
}

export function MobileMenu({ isOpened, handleOpenedMenu }: MobileMenuProps) {
	let navigate = useNavigate();

	const handleMenuNavigate = (link: string) => {
		navigate(link);
		handleOpenedMenu();
	};

	return (
		<Container isOpened={isOpened}>
			<button onClick={() => handleMenuNavigate("/")}>
				<span>Entrada</span>
			</button>
			<button onClick={() => handleMenuNavigate("/exit")}>
				<span>Saída</span>
			</button>
		</Container>
	);
}
