import { useState } from "react";
import { Initial } from "./Initial";
import { Loading } from "./Loading";
import { Container } from "./style";
import { Success } from "./Success";

import { api } from '../../services/api'

interface ExitProps {
    onOpenNewPaymentModal: () => void;
    onOpenNewExitModal: () => void;
}

export function Exit({ onOpenNewExitModal, onOpenNewPaymentModal }: ExitProps) {
    const [plateNumber, setPlateNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const registerPlatePayment  = async() => {
        setLoading(true)
        await api.post(`parking/${plateNumber}/pay`, true)
        .then(data => {
            console.log(data.data)
            setLoading(false)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        })
        .catch(error => {
            if(error.response.status === 422){
                setLoading(false)
            }
        })
    }
    
    const registerPlateOut  = async() => {
        setLoading(true)
        await api.post(`parking/${plateNumber}/out`, true)
        .then(data => {
            console.log(data.data)
            setLoading(false)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        })
        .catch(error => {
            if(error.response.status === 422){
                setLoading(false)
            }
        })
    }

    return (
        <Container>
            {loading === false && success === false && <Initial onOpenNewPaymentModal={onOpenNewPaymentModal} onOpenNewExitModal={onOpenNewExitModal} registerPlateOut={registerPlateOut} registerPlatePayment={registerPlatePayment} plateNumber={plateNumber} setPlateNumber={setPlateNumber}/>}
            {loading === true && <Loading/>}
            {success === true && <Success/>}
        </Container>
    )
}