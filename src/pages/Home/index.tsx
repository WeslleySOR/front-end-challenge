import { useState } from "react";
import { Initial } from "./Initial";
import { Loading } from "./Loading";
import { Container } from "./style";
import { Success } from "./Success";

import { api } from '../../services/api'
import { ParkingType } from "../../types/type";


export function Home() {
    const [plateNumber, setPlateNumber] = useState('')

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const registerPlate = async() => {
        setLoading(true)
        await api.post('parking', {
            paid: false,
            left: false,
            plate: plateNumber
        } as ParkingType)
        .then(data => {
            console.log(data.data)
            setLoading(false)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        })
        .catch(error => {
            if(error.response.status === 422){
                setLoading(false)
            }
        })
    }
    return (
        <>
        <Container>
            {loading === false && success === false && <Initial registerPlate={registerPlate} plateNumber={plateNumber} setPlateNumber={setPlateNumber}/>}
            {loading === true && <Loading/>}
            {success === true && <Success/>}
        </Container>
        </>
    )
}