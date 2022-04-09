import { useContext, useEffect, useState } from "react";
import { Initial } from "./Initial";
import { Loading } from "./Loading";
import { Container } from "./style";
import { Success } from "./Success";

import { api } from "../../services/api";
import { ParkingType } from "../../types/type";
import { regexToValidatePlateNumber } from "../../utils/regex";
import { PlateContext } from "../../contexts/Plate";
import { ErrorContext } from "../../contexts/Error";

export function Home() {
	const { plate } = useContext(PlateContext);
	const { updateError } = useContext(ErrorContext);

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
				updateError("");
				setTimeout(() => {
					setSuccess(false);
				}, 3000);
			})
			.catch((e) => {
				console.error(e);
				updateError("");
				setLoading(false);
				updateError(
					regexToValidatePlateNumber(plate)
						? "Esse veiculo ja deu entrada!"
						: "Digite uma placa válida. ex: AAA-0000"
				);
			});
	};

	useEffect(() => {
		updateError("");
	}, []);
	return (
		<>
			<Container>
				{loading === false && success === false && (
					<Initial registerPlate={registerPlate} />
				)}
				{loading === true && <Loading />}
				{success === true && <Success />}
			</Container>
		</>
	);
}
