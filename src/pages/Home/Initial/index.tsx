// import { registerPlate } from "../../../services/api";
import { ButtonGreen } from "../../../components/Button/Green";
import { TextField } from "../../../components/TextField";
import { Container } from "./style";

interface InitialProps {
	plateNumber: string;
	setPlateNumber: React.Dispatch<React.SetStateAction<string>>;
	registerPlate: () => Promise<void>;
	error: string;
	handleErrorMessage: (newMessage: string) => void
}

export function Initial({
	plateNumber,
	setPlateNumber,
	registerPlate,
	error,
	handleErrorMessage,
}: InitialProps) {
	return (
		<Container>
			<TextField
				error={error}
				handleErrorMessage={handleErrorMessage}
				value={plateNumber}
				setValue={setPlateNumber}
			/>
			<ButtonGreen
				disabled={plateNumber !== "" ? false : true}
				onClick={registerPlate}
				isActive={plateNumber === "" ? false : true}
				style={{ marginTop: "1.3rem" }}
			>
				CONFIRMAR ENTRADA
			</ButtonGreen>
		</Container>
	);
}
