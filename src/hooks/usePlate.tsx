import { useState } from "react";

export function usePlate() {
	const [plateNumber, setPlateNumber] = useState("");
	return { plateNumber, setPlateNumber };
}
