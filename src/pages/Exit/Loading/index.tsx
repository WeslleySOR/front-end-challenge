import { Container } from "./style";
import loadingImage from "../../../assets/loading.svg";

interface LoadingProps {
	value: string;
}

export function Loading({ value }: LoadingProps) {
	return (
		<Container>
			<img src={loadingImage} alt="Loading Image" />
			<span>{value}</span>
		</Container>
	);
}
