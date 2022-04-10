import { useContext, useState } from "react";

import { PlateContext } from "../../../../contexts/Plate";
import { ErrorContext } from "../../../../contexts/Error";

import { StyledButton } from "../../../../components/Button/Default";
import { StyledButtonLink } from "../../../../components/Button/Link";
import { Loading } from "../../Loading";
import { Success } from "../../Success";

import { api } from "../../../../services/api";

import { Container } from "./style";

interface ExitModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

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
			.catch(() => {
				updateError("Esse veículo já saiu, ou ainda não realizou pagamento!");
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
			portalClassName="ExitPlateModal"
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
		</Container>
	);
}
