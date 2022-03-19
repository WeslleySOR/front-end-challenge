import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonPurpleSecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    children: ReactNode
}

export function ButtonPurpleSecondary({ isActive, children, ...props }: ButtonPurpleSecondaryProps) {
    return(
        <Container isActive={isActive ? isActive : false} {...props}>
            {children}
        </Container>
    )
}