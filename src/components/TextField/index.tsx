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
		handlePlateNumber(text);
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
			/>
			{error !== "" && (
				<div className="error-box">
					<img src={errorShape} alt="" />
					<span>{error}</span>
				</div>
			)}
		</Container>
	);
}
