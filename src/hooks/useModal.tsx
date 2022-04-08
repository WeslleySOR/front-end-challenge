import { useState } from "react";
import { regexToValidatePlateNumber } from "../utils/regex";

export function useModal() {

	const [isNewPaymentModalOpen, setIsNewPaymentModalOpen] = useState(false);
	const [isNewExitModalOpen, setIsNewExitModalOpen] = useState(false);

	const handleOpenNewPaymentModal = (plateNumber: string) => {
		if (regexToValidatePlateNumber(plateNumber)) {
			setIsNewPaymentModalOpen(true);
		} else {
			alert("Digite uma placa válida!\nex: AAA-0000");
		}
	}

	const handleCloseNewPaymentModal = () => {
		setIsNewPaymentModalOpen(false);
	}

	const handleOpenNewExitModal = (plateNumber: string) => {
		if (regexToValidatePlateNumber(plateNumber)) {
			setIsNewExitModalOpen(true);
		} else {
			alert("Digite uma placa válida!\nex: AAA-0000");
		}
	}

	const handleCloseNewExitModal = () => {
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
