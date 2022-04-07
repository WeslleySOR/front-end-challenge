import { useState } from "react";
import { Initial } from "./Initial";
import { Loading } from "./Loading";
import { Container } from "./style";
import { Success } from "./Success";

import { api } from "../../services/api";
import { ParkingType } from "../../types/type";

interface HomeProps {
	plateNumber: string;
	setPlateNumber: React.Dispatch<React.SetStateAction<string>>;

	error: string
	handleErrorMessage: (newMessage: string) => void
}

export function Home({ plateNumber, setPlateNumber, handleErrorMessage, error }: HomeProps) {
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
					/^([a-z]{3}-[0-9]{4})$/.test(plateNumber)
						? "Esse veiculo ja deu entrada!"
						: "Essa placa é inválida!"
				);
			});
	};
	return (
		<>
			<Container>
				{loading === false && success === false && (
					<Initial
						error={error}
						handleErrorMessage={handleErrorMessage}
						registerPlate={registerPlate}
						plateNumber={plateNumber}
						setPlateNumber={setPlateNumber}
					/>
				)}
				{loading === true && <Loading />}
				{success === true && <Success />}
			</Container>
		</>
	);
}
