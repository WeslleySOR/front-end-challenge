import { StyledButton } from "../../../components/Button/Default";
import { TextField } from "../../../components/TextField";
import { useErrorMessage } from "../../../hooks/useErrorMessage";
import { Container } from "./style";

interface InitialProps {
	plateNumber: string;
	handlePlateNumber: (newPlateNumber: string) => void;
	registerPlate: () => Promise<void>;
}

export function Initial({
	plateNumber,
	handlePlateNumber,
	registerPlate,
}: InitialProps) {
	const { handleErrorMessage } = useErrorMessage();
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
