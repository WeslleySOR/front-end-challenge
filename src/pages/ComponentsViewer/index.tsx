import { useState } from "react"
import { AbaButton } from "../../components/Button/Aba"
import { ButtonGreen } from "../../components/Button/Green"
import { NoBorderButton } from "../../components/Button/NoBorder"
import { ButtonPurplePrimary } from "../../components/Button/Purple/Primary"
import { ButtonPurpleSecondary } from "../../components/Button/Purple/Secondary"
import { CardDetail } from "../../components/Card/Detail"
import { TextField } from "../../components/TextField"

import { ParkingType } from "../../types/type"
import { Container } from "./styles"

const staticPlate: ParkingType = {
  "time": "18 hours 21 minutes",
  "paid": true,
  "left": true,
  "plate": "AAA-4444",
  "reservation": "606f3a"
}

export function ComponentsViewer() {
    const [plateNumber, setPlateNumber] = useState('')
    return(
        <Container>
            <div>
                <ButtonGreen>CONFIRMAR ENTRADA</ButtonGreen>
                <ButtonGreen isActive>CONFIRMAR ENTRADA</ButtonGreen>
            </div>
            <div>
                <ButtonPurplePrimary>PAGAMENTO</ButtonPurplePrimary>
                <ButtonPurplePrimary isActive>PAGAMENTO</ButtonPurplePrimary>
            </div>
            <div>
                <ButtonPurpleSecondary>SAÍDA</ButtonPurpleSecondary>
                <ButtonPurpleSecondary isActive>SAÍDA</ButtonPurpleSecondary>
            </div>
            <div>
                <AbaButton link="/">Entrada</AbaButton>
                <AbaButton link="/exit" isActive>Saída</AbaButton>
            </div>
            <NoBorderButton>Ver Histórico</NoBorderButton>
            <TextField value={plateNumber} setValue={setPlateNumber}/>
            <CardDetail plateInfo={staticPlate}/>
        </Container>
    )
}