import { useState } from "react";

import { NoBorderButton } from "../../../../components/Button/NoBorder";
import { ButtonPurplePrimary } from "../../../../components/Button/Purple/Primary";
import { Container } from "./style";

import { api } from "../../../../services/api";
import { Loading } from "../../Loading";
import { Success } from "../../Success";

interface PaymentModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
	plateNumber: string;
	setError: React.Dispatch<React.SetStateAction<string>>;
}

export function PaymentModal({
	isOpen,
	onRequestClose,
	plateNumber,
	setError,
}: PaymentModalProps) {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const registerPlatePayment = async () => {
		setLoading(true);
		await api
			.post(`parking/${plateNumber}/pay`, true)
			.then((data) => {
				setLoading(false);
				setSuccess(true);
				setTimeout(() => {
					setSuccess(false);
					setError("");
				}, 3000);
				setTimeout(() => {
					onRequestClose();
				}, 3000);
			})
			.catch((error) => {
				setError("Esse veículo já esta pago !");
				setLoading(false);
				onRequestClose();
			});
	};
	return (
		<Container
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className="react-modal-content"
			overlayClassName="react-modal-overlay"
		>
			{loading === false && success === false && (
				<>
					<div className="box-info">
						<span>Confirma o pagamento da placa abaixo?</span>
						<span>{plateNumber}</span>
					</div>
					<ButtonPurplePrimary onClick={registerPlatePayment} isActive>
						CONFIRMAR
					</ButtonPurplePrimary>
					<NoBorderButton onClick={onRequestClose}>VOLTAR</NoBorderButton>
				</>
			)}
			{loading === true && <Loading value="Confirmando..." />}
			{success === true && <Success value="PAGO!" />}
		</Container>
	);
}
