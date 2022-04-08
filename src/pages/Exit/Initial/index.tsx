// import { registerPlate } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { NoBorderButton } from "../../../components/Button/NoBorder";
import { ButtonPurplePrimary } from "../../../components/Button/Purple/Primary";
import { ButtonPurpleSecondary } from "../../../components/Button/Purple/Secondary";
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
			<ButtonPurplePrimary
				disabled={plateNumber !== "" ? false : true}
				onClick={() => onOpenNewPaymentModal(plateNumber)}
				isActive={plateNumber === "" ? false : true}
			>
				PAGAMENTO
			</ButtonPurplePrimary>
			<ButtonPurpleSecondary
				disabled={plateNumber !== "" ? false : true}
				onClick={() => onOpenNewExitModal(plateNumber)}
				isActive={plateNumber === "" ? false : true}
			>
				SAÍDA
			</ButtonPurpleSecondary>
			<NoBorderButton
				onClick={() => navigateToPlateHistory()}
				style={{ marginTop: "0.8rem" }}
			>
				VER HISTÓRICO
			</NoBorderButton>
		</Container>
	);
}
