import { useNavigate } from "react-router-dom";
import { Container } from "./style";

interface MobileMenuProps {
	setIsOpenedMenu: React.Dispatch<React.SetStateAction<boolean>>;
	isOpened: boolean;
}

export function MobileMenu({ isOpened, setIsOpenedMenu }: MobileMenuProps) {
	let navigate = useNavigate();

	const handleMenuNavigate = (link: string) => {
		navigate(link);
		setIsOpenedMenu(false);
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
