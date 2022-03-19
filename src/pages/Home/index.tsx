import { useState } from "react";
import { Initial } from "./Initial";
import { Container } from "./style";

export function Home() {
    const [plateNumber, setPlateNumber] = useState('')
    return (
        <Container>
            <Initial plateNumber={plateNumber} setPlateNumber={setPlateNumber}/>
        </Container>
    )
}