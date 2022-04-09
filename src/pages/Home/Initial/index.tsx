import { useContext } from "react";
import { StyledButton } from "../../../components/Button/Default";
import { TextField } from "../../../components/TextField";
import { ErrorContext } from "../../../contexts/Error";
import { PlateContext } from "../../../contexts/Plate";
import { Container } from "./style";

interface InitialProps {
	registerPlate: () => Promise<void>;
}

export function Initial({
	registerPlate
}: InitialProps) {
	const { plate, updatePlate } = useContext(PlateContext)
	const { updateError } = useContext(ErrorContext)

	const handleOnClickButtonToRegisterPlate = () => {
		if (plate !== "") {
			updateError("");
			registerPlate();
		} else {
			updateError("Digite uma placa válida. ex: AAA-0000");
		}
	};

	return (
		<Container>
			<TextField
				handleErrorMessage={updateError}
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
