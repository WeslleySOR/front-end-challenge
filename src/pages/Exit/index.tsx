import { useState } from "react";
import { Initial } from "./Initial";
import { Container } from "./style";

interface ExitProps {
    plateNumber: string;
    setPlateNumber: React.Dispatch<React.SetStateAction<string>>;
    onOpenNewPaymentModal: () => void;
    onOpenNewExitModal: () => void;
}

export function Exit({ onOpenNewExitModal, onOpenNewPaymentModal, plateNumber, setPlateNumber }: ExitProps) {

    return (
        <Container>
            <Initial onOpenNewPaymentModal={onOpenNewPaymentModal} onOpenNewExitModal={onOpenNewExitModal}  plateNumber={plateNumber} setPlateNumber={setPlateNumber}/>
        </Container>
    )
}