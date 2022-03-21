import { useState } from "react";
import { NoBorderButton } from "../../../../components/Button/NoBorder";
import { ButtonPurplePrimary } from "../../../../components/Button/Purple/Primary";
import { Container } from "./style";

import { api } from '../../../../services/api'
import { Loading } from "../../Loading";
import { Success } from "../../Success";

interface ExitModalProps {
    isOpen: boolean; 
    onRequestClose: () => void;
    plateNumber: string;
}

export function ExitModal({isOpen, onRequestClose, plateNumber}: ExitModalProps) {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

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
    return(
        <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >
        {loading === false && success === false && 
            <>
                <div className="box-info">
                    <span>Confirma a saída do veiculo da placa abaixo?</span>
                    <span>{plateNumber}</span>
                </div>
                <ButtonPurplePrimary onClick={registerPlateOut} isActive>LIBERAR SAÍDA</ButtonPurplePrimary>
                <NoBorderButton onClick={onRequestClose}>VOLTAR</NoBorderButton>
            </>
        }
        {loading === true && <Loading value="Confirmando..."/>}
        {success === true && <Success value="SAÍDA LIBERADA"/>}
        </Container>
    )
}