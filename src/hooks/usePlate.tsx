import { useState } from "react";

export function usePlate() {
	const [plateNumber, setPlateNumber] = useState("");

	const handlePlateNumber = (newPlateNumber: string) => {
		setPlateNumber(newPlateNumber);
	};

	return { plateNumber, handlePlateNumber };
}
