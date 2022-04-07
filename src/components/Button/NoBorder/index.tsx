import { ReactNode } from "react";
import { Container } from "./styles";

interface NoBorderButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export function NoBorderButton({ children, ...props }: NoBorderButtonProps) {
	return <Container {...props}>{children}</Container>;
}
