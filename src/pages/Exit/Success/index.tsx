import registerDone from '../../../assets/round-done-button.svg'
import { Container } from './style'

interface SuccessProps {
    value: string;
}

export function Success({value}: SuccessProps) {
    return (
        <Container>
            <img src={registerDone} alt="Register Done" />
            <span>{value}</span>
        </Container>
    )
}