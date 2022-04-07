import axios from "axios";
import { ParkingType } from "../types/type";

export const api = axios.create({
	baseURL: "https://parking-lot-to-pfz.herokuapp.com/",
});

export const registerPlate = async (plate: string) => {
	await api
		.post("parking", {
			paid: false,
			left: false,
			plate: plate,
		} as ParkingType)
		.then((data) =>
			data.status === 200 ? console.log(data) : console.log(data.status)
		)
		.catch((error) => console.error(error));
};

export const getPlateHistory = async (plate: string) => {
	await api
		.get<ParkingType[]>(`parking/${plate}`)
		.then((data) => data.data)
		.catch((error) => console.error(error));
};

export const registerPlatePayment = async (plate: string) => {
	await api
		.post(`parking/${plate}/pay`, true)
		.then((data) => console.log(data))
		.catch((error) => console.error(error));
};

export const registerPlateOut = async (plate: string) => {
	await api
		.post(`parking/${plate}/out`, true)
		.then((data) => console.log(data))
		.catch((error) => console.error(error));
};
