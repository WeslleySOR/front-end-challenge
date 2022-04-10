import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ErrorContext } from "../../../contexts/Error";
import { PlateContext } from "../../../contexts/Plate";

import { StyledButton } from "../../../components/Button/Default";
import { StyledButtonLink } from "../../../components/Button/Link";
import { TextField } from "../../../components/TextField";

import { ExitModal } from "../Modal/Exit";
import { PaymentModal } from "../Modal/Payment";

import { useModal } from "../../../hooks/useModal";

import { regexToValidatePlateNumber } from "../../../utils/regex";

import { Container } from "./style";

export function Initial() {
	const { plate, updatePlate } = useContext(PlateContext);
	const { updateError } = useContext(ErrorContext);

	const {
		handleOpenNewExitModal,
		handleOpenNewPaymentModal,
		isNewPaymentModalOpen,
		isNewExitModalOpen,
		handleCloseNewExitModal,
		handleCloseNewPaymentModal,
	} = useModal();
	let navigate = useNavigate();

	const navigateToPlateHistory = () => {
		if (plate !== "" && regexToValidatePlateNumber(plate))
			navigate(`/history/${plate}`);
		else if (!regexToValidatePlateNumber(plate))
			updateError("Digite uma placa válida. ex: AAA-0000");
	};

	const handleOnClickButtonToOpenPaymentModal = () => {
		if (plate !== "" && regexToValidatePlateNumber(plate)) {
			updateError("");
			handleOpenNewPaymentModal(plate);
		} else {
			updateError("Digite uma placa válida. ex: AAA-0000");
		}
	};

	const handleOnClickButtonToOpenExitModal = () => {
		if (plate !== "" && regexToValidatePlateNumber(plate)) {
			updateError("");
			handleOpenNewExitModal(plate);
		} else {
			updateError("Digite uma placa válida. ex: AAA-0000");
		}
	};
	return (
		<>
			<Container>
				<TextField
					handleErrorMessage={updateError}
					handlePlateNumber={updatePlate}
				/>
				<StyledButton
					variant={plate === "" ? "exit_primary" : "exit_primary_active"}
					onClick={handleOnClickButtonToOpenPaymentModal}
				>
					PAGAMENTO
				</StyledButton>
				<StyledButton
					variant={plate === "" ? "exit_secondary" : "exit_secondary_active"}
					onClick={handleOnClickButtonToOpenExitModal}
				>
					SAÍDA
				</StyledButton>
				<StyledButtonLink
					variant="no_border"
					onClick={navigateToPlateHistory}
					style={{ marginTop: "0.8rem" }}
				>
					VER HISTÓRICO
				</StyledButtonLink>
			</Container>
			<PaymentModal
				isOpen={isNewPaymentModalOpen}
				onRequestClose={handleCloseNewPaymentModal}
			/>
			<ExitModal
				isOpen={isNewExitModalOpen}
				onRequestClose={handleCloseNewExitModal}
			/>
		</>
	);
}
