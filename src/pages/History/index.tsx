import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { ErrorContext } from "../../contexts/Error";

import { CardDetail } from "../../components/Card/Detail";

import { api } from "../../services/api";

import { ParkingType } from "../../types/type";

import arrowLeft from "../../assets/arrow_l.svg";
import { Container, Content, DataContent, NavigationBar } from "./style";

export function History() {
	const { updateError } = useContext(ErrorContext);
	const [plateHistory, setPlateHistory] = useState<ParkingType[]>();
	const [data, setData] = useState<ParkingType>();
	let navigate = useNavigate();
	const params = useParams();

	const getPlateHistory = async (plate: string) => {
		await api
			.get<ParkingType[]>(`parking/${plate}`)
			.then((data) => {
				if (data.data.length > 0) setPlateHistory(data.data);
				else {
					updateError("Esse veículo nao tem histórico !");
					navigate("/exit");
				}
			})
			.catch(() => {
				updateError("Esse veículo nao tem histórico !");
				navigate("/exit");
			});
	};
	useEffect(() => {
		getPlateHistory(params.id ? params.id : "aaa");
	}, []);
	return (
		<Container>
			{data ? (
				<>
					<NavigationBar>
						<button onClick={() => setData(undefined)}>
							<img src={arrowLeft} alt="Voltar" />
						</button>
					</NavigationBar>
					<DataContent>
						<div>
							<span>PLACA</span>
							<strong>{data.plate}</strong>
						</div>
						<div>
							<span>STATUS</span>
							<span>{data.left === true ? "Saiu" : "Estacionado"}</span>
						</div>
						<div>
							<span>TEMPO ATUAL</span>
							<span>
								{data.time
									?.replace("years", "anos")
									.replace("months", "meses")
									.replace("weeks", "semanas")
									.replace("days", "dias")
									.replace("hours", "horas")
									.replace("minutes", "minutos")
									.replace("seconds", "segundos")}
							</span>
						</div>
						<div>
							<span>PAGAMENTO</span>
							<span>{data.paid ? "Pago" : "—"}</span>
						</div>
					</DataContent>
				</>
			) : (
				<>
					<NavigationBar>
						<button onClick={() => navigate("/exit")}>
							<img src={arrowLeft} alt="Voltar" />
						</button>
						<span>
							Placa <span>{params.id}</span>
						</span>
					</NavigationBar>
					<Content>
						{plateHistory &&
							plateHistory.map((plate) => (
								<CardDetail
									key={uuid()}
									onClick={() => setData(plate)}
									plateInfo={plate}
								/>
							))}
					</Content>
				</>
			)}
		</Container>
	);
}
