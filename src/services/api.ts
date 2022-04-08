import axios from "axios";
import { ParkingType } from "../types/type";

export const api = axios.create({
	baseURL: "https://parking-lot-to-pfz.herokuapp.com/",
});