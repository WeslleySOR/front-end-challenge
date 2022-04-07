import { Container } from "./style";
import loadingImage from "../../../assets/loading.svg";

export function Loading() {
	return (
		<Container>
			<img src={loadingImage} alt="Loading Image" />
			<span>Registrando...</span>
		</Container>
	);
}
