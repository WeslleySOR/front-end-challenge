import { useEffect } from "react";
import { Initial } from "./Initial";
import { Container } from "./style";

interface ExitProps {
	plateNumber: string;
	handlePlateNumber: (newPlateNumber: string) => void;
	error: string;
	handleErrorMessage: (newMessage: string) => void;
}

export function Exit({
	plateNumber,
	handlePlateNumber,
	error,
	handleErrorMessage,
}: ExitProps) {
	useEffect(() => {
		if (error !== "Esse veículo nao tem histórico !") handleErrorMessage("");
	}, []);
	return (
		<Container>
			<Initial
				error={error}
				handleErrorMessage={handleErrorMessage}
				plateNumber={plateNumber}
				handlePlateNumber={handlePlateNumber}
			/>
		</Container>
	);
}
