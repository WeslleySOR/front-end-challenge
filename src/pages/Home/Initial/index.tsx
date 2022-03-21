// import { registerPlate } from "../../../services/api";
import { ButtonGreen } from "../../../components/Button/Green";
import { TextField } from "../../../components/TextField";
import { Container } from "./style";

interface InitialProps {
    plateNumber: string;
    setPlateNumber: React.Dispatch<React.SetStateAction<string>>;
    registerPlate: () => Promise<void>
}

export function Initial({plateNumber, setPlateNumber, registerPlate}: InitialProps) {

    return (
        <Container>
            <TextField value={plateNumber} setValue={setPlateNumber}/>
            <ButtonGreen disabled={plateNumber !== '' ? false : true} onClick={registerPlate} isActive={plateNumber === '' ? false : true} style={{marginTop: '1.3rem'}}>CONFIRMAR ENTRADA</ButtonGreen>
        </Container>
    )
}