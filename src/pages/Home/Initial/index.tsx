import { StyledButton } from "../../../components/Button/Default";
import { TextField } from "../../../components/TextField";
import { Container } from "./style";

interface InitialProps {
	error: string;
	plateNumber: string;
	handlePlateNumber: (newPlateNumber: string) => void;
	handleErrorMessage: (newMessage: string) => void;
	registerPlate: () => Promise<void>;
}

export function Initial({
	plateNumber,
	handlePlateNumber,
	registerPlate,
	error,
	handleErrorMessage,
}: InitialProps) {
	const handleOnClickButtonToRegisterPlate = () => {
		if (plateNumber !== "") {
			handleErrorMessage("");
			registerPlate();
		} else {
			handleErrorMessage("Digite uma placa válida. ex: AAA-0000");
		}
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
				variant={plateNumber === "" ? "entrance" : "entrance_active"}
				onClick={handleOnClickButtonToRegisterPlate}
				style={{ marginTop: "1.3rem" }}
			>
				CONFIRMAR ENTRADA
			</StyledButton>
		</Container>
	);
}
