import { useLocation } from "react-router-dom";
import { AbaButton } from "../Button/Aba";
import { Container } from "./style";

export function NavigationBar() {
    const location = useLocation()
    return(
        <Container isVisible={location.pathname.includes('/history') ? false : true}>
            <AbaButton link="/">Entrada</AbaButton>
            <AbaButton link="/exit">Saída</AbaButton>
        </Container>
    )
}