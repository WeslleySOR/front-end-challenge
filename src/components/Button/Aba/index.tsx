import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "./styles";

interface AbaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	link: string;
	isActive?: boolean;
	children: ReactNode;
}

export function AbaButton({
	isActive,
	children,
	link,
	...props
}: AbaButtonProps) {
	let navigate = useNavigate();
	const location = useLocation();
	return (
		<Container
			onClick={() => navigate(link)}
			isActive={location.pathname === link ? true : false}
			{...props}
		>
			{children}
		</Container>
	);
}
