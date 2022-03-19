// import { registerPlate } from "../../../services/api";
import { ButtonGreen } from "../../../components/Button/Green";
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
            <ButtonGreen isActive={plateNumber === '' ? false : true} style={{marginTop: '1.3rem'}}>CONFIRMAR ENTRADA</ButtonGreen>
        </Container>
    )
}