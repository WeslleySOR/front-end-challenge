// import { registerPlate } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { NoBorderButton } from "../../../components/Button/NoBorder";
import { ButtonPurplePrimary } from "../../../components/Button/Purple/Primary";
import { ButtonPurpleSecondary } from "../../../components/Button/Purple/Secondary";
import { TextField } from "../../../components/TextField";
import { Container } from "./style";

interface InitialProps {
    plateNumber: string;
    setPlateNumber: React.Dispatch<React.SetStateAction<string>>

    registerPlatePayment: () => Promise<void>;
    registerPlateOut: () => Promise<void>

    onOpenNewExitModal: () => void;
    onOpenNewPaymentModal: () => void;
}

export function Initial({plateNumber, setPlateNumber, onOpenNewExitModal, onOpenNewPaymentModal, registerPlateOut, registerPlatePayment}: InitialProps) {
    let navigate = useNavigate()
    return (
        <Container>
            <TextField value={plateNumber} setValue={setPlateNumber}/>
            <ButtonPurplePrimary onClick={onOpenNewPaymentModal} isActive={plateNumber === '' ? false : true}>PAGAMENTO</ButtonPurplePrimary>
            <ButtonPurpleSecondary onClick={onOpenNewExitModal} isActive={plateNumber === '' ? false : true}>SAÍDA</ButtonPurpleSecondary>
            <NoBorderButton onClick={() => navigate(`/history/${plateNumber}`)} style={{marginTop: '0.8rem'}}>VER HISTÓRICO</NoBorderButton>
        </Container>
    )
}