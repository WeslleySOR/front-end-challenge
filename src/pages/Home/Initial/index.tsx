import { useContext } from "react";
import { StyledButton } from "../../../components/Button/Default";
import { TextField } from "../../../components/TextField";
import { PlateContext } from "../../../contexts/Plate";
import { Container } from "./style";

interface InitialProps {
	error: string;
	handleErrorMessage: (newMessage: string) => void;
	registerPlate: () => Promise<void>;
}

export function Initial({
	registerPlate,
	error,
	handleErrorMessage,
}: InitialProps) {
	const { plate, updatePlate } = useContext(PlateContext)

	const handleOnClickButtonToRegisterPlate = () => {
		if (plate !== "") {
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
				handlePlateNumber={updatePlate}
			/>
			<StyledButton
				variant={plate === "" ? "entrance" : "entrance_active"}
				onClick={handleOnClickButtonToRegisterPlate}
				style={{ marginTop: "1.3rem" }}
			>
				CONFIRMAR ENTRADA
			</StyledButton>
		</Container>
	);
}
