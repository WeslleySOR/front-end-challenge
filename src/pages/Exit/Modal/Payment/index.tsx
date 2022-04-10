import { useContext, useState } from "react";

import { PlateContext } from "../../../../contexts/Plate";
import { ErrorContext } from "../../../../contexts/Error";

import { StyledButton } from "../../../../components/Button/Default";
import { StyledButtonLink } from "../../../../components/Button/Link";

import { Loading } from "../../Loading";
import { Success } from "../../Success";

import { api } from "../../../../services/api";

import { Container } from "./style";

interface PaymentModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function PaymentModal({ isOpen, onRequestClose }: PaymentModalProps) {
	const { plate } = useContext(PlateContext);
	const { updateError } = useContext(ErrorContext);

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const registerPlatePayment = async () => {
		setLoading(true);
		await api
			.post(`parking/${plate}/pay`, true)
			.then(() => {
				setLoading(false);
				setSuccess(true);
				setTimeout(() => {
					setSuccess(false);
					updateError("");
				}, 3000);
				setTimeout(() => {
					onRequestClose();
				}, 3000);
			})
			.catch(() => {
				updateError("Esse veículo já esta pago, ou já saiu do estacionamento.");
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
			appElement={document.getElementById("root") || undefined}
			ariaHideApp={true}
			portalClassName="PaymentPlateModal"
		>
			{loading === false && success === false && (
				<>
					<div className="box-info">
						<span>Confirma o pagamento da placa abaixo?</span>
						<span>{plate}</span>
					</div>
					<StyledButton
						variant={plate === "" ? "exit_primary" : "exit_primary_active"}
						onClick={registerPlatePayment}
					>
						CONFIRMAR
					</StyledButton>
					<StyledButtonLink variant="no_border" onClick={onRequestClose}>
						VOLTAR
					</StyledButtonLink>
				</>
			)}
			{loading === true && <Loading value="Confirmando..." />}
			{success === true && <Success value="PAGO!" />}
		</Container>
	);
}
