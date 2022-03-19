import { ParkingType } from "../../../types/type";
import { Container } from "./styles";

interface CardDetailProps {
    plateInfo: ParkingType
}

export function CardDetail({ plateInfo }: CardDetailProps) {
    return (
        <Container>
            <div>
                <span>TEMPO ATUAL</span>
                <span>{plateInfo.time}</span>
            </div>
            <div>
                <span>PAGAMENTO</span>
                <span>{plateInfo.paid ? 'Pago' : '—'}</span>
            </div>
        </Container>
    )
}