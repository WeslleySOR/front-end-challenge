// import { registerPlate } from "../../../services/api";
import { ButtonGreen } from "../../../components/Button/Green";
import { TextField } from "../../../components/TextField";
import { Container } from "./style";

interface InitialProps {
	plateNumber: string;
	setPlateNumber: React.Dispatch<React.SetStateAction<string>>;
	registerPlate: () => Promise<void>;
	error: string;
	setError: React.Dispatch<React.SetStateAction<string>>;
}

export function Initial({
	plateNumber,
	setPlateNumber,
	registerPlate,
	error,
	setError,
}: InitialProps) {
	return (
		<Container>
			<TextField
				error={error}
				setError={setError}
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
