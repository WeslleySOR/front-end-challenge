import { ReactNode } from "react";
import { Container } from "./styles";

interface AbaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    children: ReactNode
}

export function AbaButton({isActive, children, ...props }: AbaButtonProps) {
    return(
        <Container isActive={isActive} {...props}>
            {children}
        </Container>
    )
}