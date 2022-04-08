import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../../components/Button/Default";
import { StyledButtonLink } from "../../../components/Button/Link";
import { TextField } from "../../../components/TextField";
import { regex } from "../../../utils/regex";
import { Container } from "./style";

interface InitialProps {
	plateNumber: string;
	handlePlateNumber: (newPlateNumber: string) => void

	onOpenNewExitModal: (plateNumber: string) => void;
	onOpenNewPaymentModal: (plateNumber: string) => void;

	error: string;
	handleErrorMessage: (newMessage: string) => void
}

export function Initial({
	plateNumber,
	handlePlateNumber,
	onOpenNewExitModal,
	onOpenNewPaymentModal,
	error,
	handleErrorMessage,
}: InitialProps) {
	let navigate = useNavigate();

	const navigateToPlateHistory = () => {
		if (plateNumber !== "" && regex(plateNumber))
			navigate(`/history/${plateNumber}`);
		else if (!regex(plateNumber))
			alert("Digite uma placa válida!\nex: AAA-0000");
	};
	return (
		<Container>
			<TextField
				error={error}
				handleErrorMessage={handleErrorMessage}
				plateNumber={plateNumber}
				handlePlateNumber={handlePlateNumber}
			/>
			<StyledButton
				variant={plateNumber === "" ? "exit_primary" : "exit_primary_active"}
				onClick={() => onOpenNewPaymentModal(plateNumber)}
			>
				PAGAMENTO
			</StyledButton>
			<StyledButton
				variant={plateNumber === "" ? "exit_secondary" : "exit_secondary_active"}
				onClick={() => onOpenNewExitModal(plateNumber)}
			>
				SAÍDA
			</StyledButton>
			<StyledButtonLink
				variant="no_border"
				onClick={() => navigateToPlateHistory()}
				style={{ marginTop: "0.8rem" }}
			>
				VER HISTÓRICO
			</StyledButtonLink>
		</Container>
	);
}
