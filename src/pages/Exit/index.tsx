import { useContext, useEffect } from "react";
import { ErrorContext } from "../../contexts/Error";
import { Initial } from "./Initial";
import { Container } from "./style";

export function Exit() {
	const { error, updateError } = useContext(ErrorContext)
	useEffect(() => {
		if (error !== "Esse veículo nao tem histórico !") updateError("");
	}, []);
	return (
		<Container>
			<Initial />
		</Container>
	);
}
