import { NoBorderButton } from "../../../../components/Button/NoBorder";
import { ButtonPurplePrimary } from "../../../../components/Button/Purple/Primary";
import { Container } from "./style";


interface PaymentModalProps {
    isOpen: boolean; 
    onRequestClose: () => void;
}

export function PaymentModal({isOpen, onRequestClose}: PaymentModalProps) {
    return(
        <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >
            <div className="box-info">
                <span>Confirma o pagamento da placa abaixo?</span>
                <span>AAA-0000</span>
            </div>
            <ButtonPurplePrimary isActive>CONFIRMAR</ButtonPurplePrimary>
            <NoBorderButton>VOLTAR</NoBorderButton>
        </Container>
    )
}