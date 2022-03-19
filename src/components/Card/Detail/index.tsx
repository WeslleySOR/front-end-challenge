import { ParkingType } from "../../../types/type";
import { Container } from "./styles";

interface CardDetailProps extends React.HTMLAttributes<HTMLDivElement>{
    plateInfo: ParkingType
}

export function CardDetail({ plateInfo, ...props }: CardDetailProps) {
    return (
        <Container {...props}>
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