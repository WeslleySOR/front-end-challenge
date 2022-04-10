import loadingImage from "../../../assets/loading.svg";

import { Container } from "./style";

export function Loading() {
	return (
		<Container>
			<img src={loadingImage} alt="Loading Image" />
			<span>Registrando...</span>
		</Container>
	);
}
