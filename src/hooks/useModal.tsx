import { useState } from "react";
import { regex } from "../utils/regex";

import { usePlate } from "./usePlate";

export function useModal() {
	const { plateNumber } = usePlate();

	const [isNewPaymentModalOpen, setIsNewPaymentModalOpen] = useState(false);
	const [isNewExitModalOpen, setIsNewExitModalOpen] = useState(false);

	function handleOpenNewPaymentModal() {
		if (regex(plateNumber)) {
			setIsNewPaymentModalOpen(true);
		} else {
			console.log(plateNumber)
			alert("Digite uma placa válida!\nex: AAA-0000");
		}
	}

	function handleCloseNewPaymentModal() {
		setIsNewPaymentModalOpen(false);
	}

	function handleOpenNewExitModal() {
		if (regex(plateNumber)) {
			setIsNewExitModalOpen(true);
		} else {
			console.log(plateNumber)
			alert("Digite uma placa válida!\nex: AAA-0000");
		}
	}

	function handleCloseNewExitModal() {
		setIsNewExitModalOpen(false);
	}

	return {
		isNewPaymentModalOpen,
		isNewExitModalOpen,
		handleOpenNewExitModal,
		handleCloseNewExitModal,
		handleOpenNewPaymentModal,
		handleCloseNewPaymentModal,
	};
}
