import { Container } from "./styles";

import errorShape from "../../assets/error.svg";

interface TextFieldProps {
	error: string;
	plateNumber: string;
	handlePlateNumber: (newPlateNumber: string) => void;
	handleErrorMessage: (newMessage: string) => void;
}

export function TextField({
	error,
	plateNumber,
	handleErrorMessage,
	handlePlateNumber,
}: TextFieldProps) {
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
			<span>Número da placa:</span>
			<input
				type="text"
				placeholder="AAA-0000"
				value={plateNumber}
				onChange={(e) => handleInputText(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "-") {
						e.preventDefault();
						if (plateNumber.length < 4)
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
