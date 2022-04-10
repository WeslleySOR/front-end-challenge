import loadingImage from "../../../assets/loading.svg";

import { Container } from "./style";

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
