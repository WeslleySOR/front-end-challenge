import { ReactNode } from "react";

import { Container } from "./style";

interface StyledButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant:
		| "entrance"
		| "entrance_active"
		| "exit_primary"
		| "exit_primary_active"
		| "exit_secondary"
		| "exit_secondary_active";
	children: ReactNode;
}

export function StyledButton({
	variant,
	children,
	...props
}: StyledButtonProps) {
	return (
		<Container mode={variant} {...props}>
			{children}
		</Container>
	);
}
