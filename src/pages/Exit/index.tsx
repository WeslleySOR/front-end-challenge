import { useEffect } from "react";
import { Initial } from "./Initial";
import { Container } from "./style";

interface ExitProps {
	error: string;
	handleErrorMessage: (newMessage: string) => void;
}

export function Exit({
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
			/>
		</Container>
	);
}
