import { useState } from "react";
import { regex } from "../utils/regex";

export function useModal() {

	const [isNewPaymentModalOpen, setIsNewPaymentModalOpen] = useState(false);
	const [isNewExitModalOpen, setIsNewExitModalOpen] = useState(false);

	function handleOpenNewPaymentModal(plateNumber: string) {
		if (regex(plateNumber)) {
			setIsNewPaymentModalOpen(true);
		} else {
			alert("Digite uma placa válida!\nex: AAA-0000");
		}
	}

	function handleCloseNewPaymentModal() {
		setIsNewPaymentModalOpen(false);
	}

	function handleOpenNewExitModal(plateNumber: string) {
		if (regex(plateNumber)) {
			setIsNewExitModalOpen(true);
		} else {
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
