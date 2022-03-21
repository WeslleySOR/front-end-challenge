import { useLocation } from "react-router-dom";
import { AbaButton } from "../Button/Aba";
import { Container } from "./style";

interface NavigationBarProps {
    isOpenedMenu: boolean;
}

export function NavigationBar({isOpenedMenu}: NavigationBarProps) {
    const location = useLocation()
    return(
        <Container isOpenedMenu={isOpenedMenu} isVisible={location.pathname.includes('/history') ? false : true}>
            <AbaButton link="/">Entrada</AbaButton>
            <AbaButton link="/exit">Saída</AbaButton>
        </Container>
    )
}