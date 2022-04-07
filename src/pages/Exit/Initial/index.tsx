// import { registerPlate } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { NoBorderButton } from "../../../components/Button/NoBorder";
import { ButtonPurplePrimary } from "../../../components/Button/Purple/Primary";
import { ButtonPurpleSecondary } from "../../../components/Button/Purple/Secondary";
import { TextField } from "../../../components/TextField";
import { Container } from "./style";

interface InitialProps {
	plateNumber: string;
	setPlateNumber: React.Dispatch<React.SetStateAction<string>>;

	onOpenNewExitModal: () => void;
	onOpenNewPaymentModal: () => void;

	error: string;
	handleErrorMessage: (newMessage: string) => void
}

export function Initial({
	plateNumber,
	setPlateNumber,
	onOpenNewExitModal,
	onOpenNewPaymentModal,
	error,
	handleErrorMessage,
}: InitialProps) {
	let navigate = useNavigate();

	const navigateToPlateHistory = () => {
		if (plateNumber !== "" && /^([a-z]{3}-[0-9]{4})$/.test(plateNumber))
			navigate(`/history/${plateNumber}`);
		else if (!/^([a-z]{3}-[0-9]{4})$/.test(plateNumber))
			alert("Digite uma placa válida!\nex: AAA-0000");
	};
	return (
		<Container>
			<TextField
				error={error}
				handleErrorMessage={handleErrorMessage}
				value={plateNumber}
				setValue={setPlateNumber}
			/>
			<ButtonPurplePrimary
				disabled={plateNumber !== "" ? false : true}
				onClick={onOpenNewPaymentModal}
				isActive={plateNumber === "" ? false : true}
			>
				PAGAMENTO
			</ButtonPurplePrimary>
			<ButtonPurpleSecondary
				disabled={plateNumber !== "" ? false : true}
				onClick={onOpenNewExitModal}
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
