// import { registerPlate } from "../../../services/api";
import { ButtonPurplePrimary } from "../../../components/Button/Purple/Primary";
import { ButtonPurpleSecondary } from "../../../components/Button/Purple/Secondary";
import { TextField } from "../../../components/TextField";
import { Container } from "./style";

interface InitialProps {
    plateNumber: string;
    setPlateNumber: React.Dispatch<React.SetStateAction<string>>
}

export function Initial({plateNumber, setPlateNumber}: InitialProps) {
    return (
        <Container>
            <TextField value={plateNumber} setValue={setPlateNumber}/>
            <ButtonPurplePrimary isActive={plateNumber === '' ? false : true}>PAGAMENTO</ButtonPurplePrimary>
            <ButtonPurpleSecondary isActive={plateNumber === '' ? false : true}>SAÍDA</ButtonPurpleSecondary>
        </Container>
    )
}