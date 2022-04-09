import { useContext, useEffect, useState } from "react";
import { Initial } from "./Initial";
import { Loading } from "./Loading";
import { Container } from "./style";
import { Success } from "./Success";

import { api } from "../../services/api";
import { ParkingType } from "../../types/type";
import { regexToValidatePlateNumber } from "../../utils/regex";
import { PlateContext } from "../../contexts/Plate";

interface HomeProps {
	error: string;
	handleErrorMessage: (newMessage: string) => void;
}

export function Home({
	handleErrorMessage,
	error,
}: HomeProps) {
	const { plate } = useContext(PlateContext)

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const registerPlate = async () => {
		setLoading(true);
		await api
			.post("parking", {
				paid: false,
				left: false,
				plate: plate,
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
					regexToValidatePlateNumber(plate)
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
						error={error}
						handleErrorMessage={handleErrorMessage}
						registerPlate={registerPlate}
					/>
				)}
				{loading === true && <Loading />}
				{success === true && <Success />}
			</Container>
		</>
	);
}
