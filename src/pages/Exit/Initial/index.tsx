import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../../components/Button/Default";
import { StyledButtonLink } from "../../../components/Button/Link";
import { TextField } from "../../../components/TextField";
import { useErrorMessage } from "../../../hooks/useErrorMessage";
import { useModal } from "../../../hooks/useModal";
import { regexToValidatePlateNumber } from "../../../utils/regex";
import { ExitModal } from "../Modal/Exit";
import { PaymentModal } from "../Modal/Payment";
import { Container } from "./style";

interface InitialProps {
	plateNumber: string;
	handlePlateNumber: (newPlateNumber: string) => void;
}

export function Initial({
	plateNumber,
	handlePlateNumber
}: InitialProps) {
	const {
		handleOpenNewExitModal,
		handleOpenNewPaymentModal,
		isNewPaymentModalOpen,
		isNewExitModalOpen,
		handleCloseNewExitModal,
		handleCloseNewPaymentModal,
	} = useModal();
	const { handleErrorMessage } = useErrorMessage();
	let navigate = useNavigate();

	const navigateToPlateHistory = () => {
		if (plateNumber !== "" && regexToValidatePlateNumber(plateNumber))
			navigate(`/history/${plateNumber}`);
		else if (!regexToValidatePlateNumber(plateNumber))
			handleErrorMessage("Digite uma placa válida. ex: AAA-0000");
	};

	const handleOnClickButtonToOpenPaymentModal = () => {
		if (plateNumber !== "" && regexToValidatePlateNumber(plateNumber)) {
			handleErrorMessage("");
			handleOpenNewPaymentModal(plateNumber);
		} else {
			handleErrorMessage("Digite uma placa válida. ex: AAA-0000");
		}
	};

	const handleOnClickButtonToOpenExitModal = () => {
		if (plateNumber !== "" && regexToValidatePlateNumber(plateNumber)) {
			handleErrorMessage("");
			handleOpenNewExitModal(plateNumber);
		} else {
			handleErrorMessage("Digite uma placa válida. ex: AAA-0000");
		}
	};
	return (
		<>
			<Container>
				<TextField
					plateNumber={plateNumber}
					handlePlateNumber={handlePlateNumber}
				/>
				<StyledButton
					variant={plateNumber === "" ? "exit_primary" : "exit_primary_active"}
					onClick={handleOnClickButtonToOpenPaymentModal}
				>
					PAGAMENTO
				</StyledButton>
				<StyledButton
					variant={
						plateNumber === "" ? "exit_secondary" : "exit_secondary_active"
					}
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
				plateNumber={plateNumber}
				isOpen={isNewPaymentModalOpen}
				onRequestClose={handleCloseNewPaymentModal}
			/>
			<ExitModal
				plateNumber={plateNumber}
				isOpen={isNewExitModalOpen}
				onRequestClose={handleCloseNewExitModal}
			/>
		</>
	);
}
