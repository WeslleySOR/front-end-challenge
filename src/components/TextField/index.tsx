import { Container } from "./styles";

import errorShape from "../../assets/error.svg";

interface TextFieldProps {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	error: string;
	handleErrorMessage: (newMessage: string) => void
}

export function TextField({
	value,
	setValue,
	error,
	handleErrorMessage,
}: TextFieldProps) {
	const handleInputText = (text: string) => {
		setValue(text);
		handleErrorMessage("");
	};
	return (
		<Container error={error !== ""}>
			<span>Número da placa:</span>
			<input
				type="text"
				placeholder="AAA-0000"
				value={value}
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
