import { useContext, useState } from "react";
import Modal from 'react-modal'

import { PlateContext } from "../../../../contexts/Plate";
import { ErrorContext } from "../../../../contexts/Error";

import { StyledButton } from "../../../../components/Button/Default";
import { StyledButtonLink } from "../../../../components/Button/Link";
import { Loading } from "../../Loading";
import { Success } from "../../Success";

import { api } from "../../../../services/api";

import { AxiosError } from "axios";

interface ExitModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

Modal.setAppElement("#root")

export function ExitModal({ isOpen, onRequestClose }: ExitModalProps) {
	const { plate } = useContext(PlateContext);
	const { updateError } = useContext(ErrorContext);

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const registerPlateOut = async () => {
		setLoading(true);
		await api
			.post(`parking/${plate}/out`, true)
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
			.catch((error: AxiosError) => {
				const statusCode = error.response?.status
				if(statusCode === 404) updateError("Esse veículo já saiu, ou não tem histórico!");
				else if(statusCode === 422) updateError("Esse veículo ainda não realizou pagamento!");
				setLoading(false);
				onRequestClose();
			});
	};
	return (
		<Modal
			className="exit-modal-container"
			overlayClassName="react-modal-overlay"
			portalClassName="ExitPlateModal"
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			appElement={document.getElementById("root") || undefined}
			ariaHideApp={true}
		>
			{loading === false && success === false && (
				<>
					<div className="box-info">
						<span>Confirma a saída do veiculo da placa abaixo?</span>
						<span>{plate}</span>
					</div>
					<StyledButton
						variant={plate === "" ? "exit_primary" : "exit_primary_active"}
						onClick={registerPlateOut}
					>
						LIBERAR SAÍDA
					</StyledButton>
					<StyledButtonLink variant="no_border" onClick={onRequestClose}>
						VOLTAR
					</StyledButtonLink>
				</>
			)}
			{loading === true && <Loading value="Confirmando..." />}
			{success === true && <Success value="SAÍDA LIBERADA" />}
		</Modal>
	);
}
