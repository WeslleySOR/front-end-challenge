import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonGreenProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    children: ReactNode
}

export function ButtonGreen({ isActive, children, ...props }: ButtonGreenProps) {
    return(
        <Container isActive={isActive} {...props}>
            {children}
        </Container>
    )
}