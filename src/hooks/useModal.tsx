import { useState } from "react";

import { usePlate } from "./usePlate";

export function useModal() {
	const { plateNumber } = usePlate();

	const [isNewPaymentModalOpen, setIsNewPaymentModalOpen] = useState(false);
	const [isNewExitModalOpen, setIsNewExitModalOpen] = useState(false);

	function handleOpenNewPaymentModal() {
		if (/^([a-z]{3}-[0-9]{4})$/.test(plateNumber))
			setIsNewPaymentModalOpen(true);
		else alert("Digite uma placa válida!\nex: AAA-0000");
	}

	function handleCloseNewPaymentModal() {
		setIsNewPaymentModalOpen(false);
	}

	function handleOpenNewExitModal() {
		if (/^([a-z]{3}-[0-9]{4})$/.test(plateNumber)) setIsNewExitModalOpen(true);
		else alert("Digite uma placa válida!\nex: AAA-0000");
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
