import { useContext, useState } from "react";

import { Container } from "./style";

import { api } from "../../../../services/api";
import { Loading } from "../../Loading";
import { Success } from "../../Success";
import { StyledButton } from "../../../../components/Button/Default";
import { StyledButtonLink } from "../../../../components/Button/Link";
import { PlateContext } from "../../../../contexts/Plate";

interface PaymentModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
	handleErrorMessage: (newMessage: string) => void;
}

export function PaymentModal({
	isOpen,
	onRequestClose,
	handleErrorMessage,
}: PaymentModalProps) {
	const { plate } = useContext(PlateContext);

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
					handleErrorMessage("");
				}, 3000);
				setTimeout(() => {
					onRequestClose();
				}, 3000);
			})
			.catch(() => {
				handleErrorMessage(
					"Esse veículo já esta pago, ou já saiu do estacionamento."
				);
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
