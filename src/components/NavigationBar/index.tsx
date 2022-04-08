import { useLocation, useNavigate } from "react-router-dom";
import { StyledButtonLink } from "../Button/Link";
import { Container } from "./style";

export function NavigationBar() {
	let navigate = useNavigate();
	const location = useLocation();
	return (
		<Container
			isVisible={location.pathname.includes("/history") ? false : true}
		>
			<StyledButtonLink
				variant={location.pathname === "/" ? "tab_active" : "tab"}
				onClick={() => navigate("/")}
			>
				Entrada
			</StyledButtonLink>
			<StyledButtonLink
				variant={location.pathname === "/exit" ? "tab_active" : "tab"}
				onClick={() => navigate("/exit")}
			>
				Saída
			</StyledButtonLink>
		</Container>
	);
}
