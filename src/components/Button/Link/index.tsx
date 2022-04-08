import { ReactNode } from "react";
import { Container } from "./style";

interface StyledButtonLinkProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "tab" | "tab_active" | "no_border";
	children: ReactNode;
}

export function StyledButtonLink({ variant, children, ...props }: StyledButtonLinkProps) {
	return <Container mode={variant} {...props}>{children}</Container>;
}
