import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../../components/Button/Default";
import { StyledButtonLink } from "../../../components/Button/Link";
import { TextField } from "../../../components/TextField";
import { PlateContext } from "../../../contexts/Plate";
import { useModal } from "../../../hooks/useModal";
import { regexToValidatePlateNumber } from "../../../utils/regex";
import { ExitModal } from "../Modal/Exit";
import { PaymentModal } from "../Modal/Payment";
import { Container } from "./style";

interface InitialProps {
	error: string;
	handleErrorMessage: (newMessage: string) => void;
}

export function Initial({
	error,
	handleErrorMessage,
}: InitialProps) {
	const { plate, updatePlate } = useContext(PlateContext)

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
			handleErrorMessage("Digite uma placa válida. ex: AAA-0000");
	};

	const handleOnClickButtonToOpenPaymentModal = () => {
		if (plate !== "" && regexToValidatePlateNumber(plate)) {
			handleErrorMessage("");
			handleOpenNewPaymentModal(plate);
		} else {
			handleErrorMessage("Digite uma placa válida. ex: AAA-0000");
		}
	};

	const handleOnClickButtonToOpenExitModal = () => {
		if (plate !== "" && regexToValidatePlateNumber(plate)) {
			handleErrorMessage("");
			handleOpenNewExitModal(plate);
		} else {
			handleErrorMessage("Digite uma placa válida. ex: AAA-0000");
		}
	};
	return (
		<>
			<Container>
				<TextField
					error={error}
					handleErrorMessage={handleErrorMessage}
					handlePlateNumber={updatePlate}
				/>
				<StyledButton
					variant={plate === "" ? "exit_primary" : "exit_primary_active"}
					onClick={handleOnClickButtonToOpenPaymentModal}
				>
					PAGAMENTO
				</StyledButton>
				<StyledButton
					variant={
						plate === "" ? "exit_secondary" : "exit_secondary_active"
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
				handleErrorMessage={handleErrorMessage}
				isOpen={isNewPaymentModalOpen}
				onRequestClose={handleCloseNewPaymentModal}
			/>
			<ExitModal
				handleErrorMessage={handleErrorMessage}
				isOpen={isNewExitModalOpen}
				onRequestClose={handleCloseNewExitModal}
			/>
		</>
	);
}
