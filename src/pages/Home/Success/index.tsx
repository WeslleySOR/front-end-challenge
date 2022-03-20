import registerDone from '../../../assets/round-done-button.svg'
import { Container } from './style'

export function Success() {
    return (
        <Container>
            <img src={registerDone} alt="Register Done" />
            <span>registrado!</span>
        </Container>
    )
}