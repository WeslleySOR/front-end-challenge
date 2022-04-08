import { useEffect, useState } from "react";
import { Initial } from "./Initial";
import { Loading } from "./Loading";
import { Container } from "./style";
import { Success } from "./Success";

import { api } from "../../services/api";
import { ParkingType } from "../../types/type";
import { regexToValidatePlateNumber } from "../../utils/regex";

interface HomeProps {
	error: string;
	plateNumber: string;
	handlePlateNumber: (newPlateNumber: string) => void;
	handleErrorMessage: (newMessage: string) => void;
}

export function Home({
	plateNumber,
	handlePlateNumber,
	handleErrorMessage,
	error,
}: HomeProps) {
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
			.then((data) => {
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
		handleErrorMessage("")
	},[])
	return (
		<>
			<Container>
				{loading === false && success === false && (
					<Initial
						error={error}
						handleErrorMessage={handleErrorMessage}
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
