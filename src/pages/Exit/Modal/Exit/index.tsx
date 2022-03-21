import { NoBorderButton } from "../../../../components/Button/NoBorder";
import { ButtonPurplePrimary } from "../../../../components/Button/Purple/Primary";
import { Container } from "./style";


interface ExitModalProps {
    isOpen: boolean; 
    onRequestClose: () => void;
}

export function ExitModal({isOpen, onRequestClose}: ExitModalProps) {
    return(
        <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >
            <div className="box-info">
                <span>Confirma a saída do veiculo da placa abaixo?</span>
                <span>AAA-0000</span>
            </div>
            <ButtonPurplePrimary isActive>LIBERAR SAÍDA</ButtonPurplePrimary>
            <NoBorderButton>VOLTAR</NoBorderButton>
        </Container>
    )
}