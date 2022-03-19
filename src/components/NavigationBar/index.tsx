import { AbaButton } from "../Button/Aba";
import { Container } from "./style";

export function NavigationBar() {
    return(
        <Container isVisible={location.pathname.includes('/history') ? false : true}>
            <AbaButton link="/">Entrada</AbaButton>
            <AbaButton link="/exit">Saída</AbaButton>
        </Container>
    )
}