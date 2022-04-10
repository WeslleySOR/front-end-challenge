import { useContext } from "react";

import { PlateContext } from "../../contexts/Plate";
import { ErrorContext } from "../../contexts/Error";

import errorShape from "../../assets/error.svg";

import { Container } from "./styles";

interface TextFieldProps {
	handlePlateNumber: (newPlateNumber: string) => void;
	handleErrorMessage: (newMessage: string) => void;
}

export function TextField({
	handleErrorMessage,
	handlePlateNumber,
}: TextFieldProps) {
	const { plate } = useContext(PlateContext);
	const { error } = useContext(ErrorContext);

	const handleInputText = (text: string) => {
		if (text.length <= 8) {
			// Limitando a escrita da placa para 8 caracters
			text = text.replace("-", ""); // Removendo o traço para aplicar o regex
			if (text.length > 3) {
				// Só aplicar o regex se o tamanho do texto for maior que 3
				text = text.replace(/(.{3})/, "$1-");
			}
			handlePlateNumber(text);
		}
		handleErrorMessage("");
	};
	return (
		<Container error={error !== ""}>
			<label htmlFor="number-plate-input">Número da placa:</label>
			<input
				id="number-plate-input"
				type="text"
				placeholder="AAA-0000"
				value={plate}
				onChange={(e) => handleInputText(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "-") {
						e.preventDefault();
						if (plate.length < 4)
							handleErrorMessage("O carácter '-' não precisa ser digitado.");
					}
				}}
			/>
			{error !== "" && (
				<div className="error-box">
					<img src={errorShape} alt="Error Message Icon" />
					<span>{error}</span>
				</div>
			)}
		</Container>
	);
}
