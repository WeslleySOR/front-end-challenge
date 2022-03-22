import { useState } from "react";
import { Initial } from "./Initial";
import { Loading } from "./Loading";
import { Container } from "./style";
import { Success } from "./Success";

import { api } from '../../services/api'
import { ParkingType } from "../../types/type";

interface HomeProps{
    plateNumber: string;
    setPlateNumber: React.Dispatch<React.SetStateAction<string>>;

    setExitError: React.Dispatch<React.SetStateAction<string>>;
}

export function Home({plateNumber, setPlateNumber, setExitError}: HomeProps) {

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const registerPlate = async() => {
        setLoading(true)
        await api.post('parking', {
            paid: false,
            left: false,
            plate: plateNumber
        } as ParkingType)
        .then(data => {
            setLoading(false)
            setSuccess(true)
            setExitError('')
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        })
        .catch(error => {
            console.error(error)
            setExitError('')
            setLoading(false)
            setError(/^([a-z]{3}-[0-9]{4})$/.test(plateNumber) ? 'Esse veiculo ja deu entrada!' : 'Essa placa é inválida!')
        })
    }
    return (
        <>
        <Container>
            {loading === false && success === false && <Initial error={error} setError={setError} registerPlate={registerPlate} plateNumber={plateNumber} setPlateNumber={setPlateNumber}/>}
            {loading === true && <Loading/>}
            {success === true && <Success/>}
        </Container>
        </>
    )
}