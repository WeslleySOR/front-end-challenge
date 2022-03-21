import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonPurplePrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    children: ReactNode
}

export function ButtonPurplePrimary({ isActive, children, ...props }: ButtonPurplePrimaryProps) {
    return(
        <Container isActive={isActive ? isActive : false} {...props}>
            {children}
        </Container>
    )
}