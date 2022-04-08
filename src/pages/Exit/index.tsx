import { useEffect } from "react";
import { useErrorMessage } from "../../hooks/useErrorMessage";
import { Initial } from "./Initial";
import { Container } from "./style";

interface ExitProps {
	plateNumber: string;
	handlePlateNumber: (newPlateNumber: string) => void;
}

export function Exit({
	plateNumber,
	handlePlateNumber
}: ExitProps) {
	const { errorMessage, handleErrorMessage } = useErrorMessage();
	useEffect(() => {
		if (errorMessage !== "Esse veículo nao tem histórico !") handleErrorMessage("");
	}, []);
	return (
		<Container>
			<Initial
				plateNumber={plateNumber}
				handlePlateNumber={handlePlateNumber}
			/>
		</Container>
	);
}
