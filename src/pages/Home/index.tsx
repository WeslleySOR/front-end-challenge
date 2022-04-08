import { useEffect, useState } from "react";
import { Initial } from "./Initial";
import { Loading } from "./Loading";
import { Container } from "./style";
import { Success } from "./Success";

import { api } from "../../services/api";
import { ParkingType } from "../../types/type";
import { regexToValidatePlateNumber } from "../../utils/regex";
import { useErrorMessage } from "../../hooks/useErrorMessage";

interface HomeProps {
	plateNumber: string;
	handlePlateNumber: (newPlateNumber: string) => void;
}

export function Home({
	plateNumber,
	handlePlateNumber,
}: HomeProps) {
	const { handleErrorMessage } = useErrorMessage();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const registerPlate = async () => {
		setLoading(true);
		await api
			.post("parking", {
				paid: false,
				left: false,
				plate: plateNumber,
			} as ParkingType)
			.then(() => {
				setLoading(false);
				setSuccess(true);
				handleErrorMessage("");
				setTimeout(() => {
					setSuccess(false);
				}, 3000);
			})
			.catch((e) => {
				console.error(e);
				handleErrorMessage("");
				setLoading(false);
				handleErrorMessage(
					regexToValidatePlateNumber(plateNumber)
						? "Esse veiculo ja deu entrada!"
						: "Digite uma placa válida. ex: AAA-0000"
				);
			});
	};

	useEffect(() => {
		handleErrorMessage("");
	}, []);
	return (
		<>
			<Container>
				{loading === false && success === false && (
					<Initial
						registerPlate={registerPlate}
						plateNumber={plateNumber}
						handlePlateNumber={handlePlateNumber}
					/>
				)}
				{loading === true && <Loading />}
				{success === true && <Success />}
			</Container>
		</>
	);
}
