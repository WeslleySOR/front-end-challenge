import { useState } from "react";

import { Container } from "./style";

import { api } from "../../../../services/api";
import { Loading } from "../../Loading";
import { Success } from "../../Success";
import { StyledButton } from "../../../../components/Button/Default";
import { StyledButtonLink } from "../../../../components/Button/Link";

interface PaymentModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
	plateNumber: string;
	handleErrorMessage: (newMessage: string) => void;
}

export function PaymentModal({
	isOpen,
	onRequestClose,
	plateNumber,
	handleErrorMessage,
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
					handleErrorMessage("");
				}, 3000);
				setTimeout(() => {
					onRequestClose();
				}, 3000);
			})
			.catch((error) => {
				handleErrorMessage("Esse veículo já esta pago !");
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
			appElement={document.getElementById('root') || undefined}
			ariaHideApp={true}
			portalClassName="PaymentPlateModal"
		>
			{loading === false && success === false && (
				<>
					<div className="box-info">
						<span>Confirma o pagamento da placa abaixo?</span>
						<span>{plateNumber}</span>
					</div>
					<StyledButton variant={plateNumber === "" ? "exit_primary" : "exit_primary_active"} onClick={registerPlatePayment}>
						CONFIRMAR
					</StyledButton>
					<StyledButtonLink variant="no_border" onClick={onRequestClose}>VOLTAR</StyledButtonLink>
				</>
			)}
			{loading === true && <Loading value="Confirmando..." />}
			{success === true && <Success value="PAGO!" />}
		</Container>
	);
}
