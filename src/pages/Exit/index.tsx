import { useState } from "react";
import { Initial } from "./Initial";
import { Container } from "./style";

interface ExitProps {
	plateNumber: string;
	setPlateNumber: React.Dispatch<React.SetStateAction<string>>;
	onOpenNewPaymentModal: () => void;
	onOpenNewExitModal: () => void;
	error: string;
	setError: React.Dispatch<React.SetStateAction<string>>;
}

export function Exit({
	onOpenNewExitModal,
	onOpenNewPaymentModal,
	plateNumber,
	setPlateNumber,
	error,
	setError,
}: ExitProps) {
	return (
		<Container>
			<Initial
				error={error}
				setError={setError}
				onOpenNewPaymentModal={onOpenNewPaymentModal}
				onOpenNewExitModal={onOpenNewExitModal}
				plateNumber={plateNumber}
				setPlateNumber={setPlateNumber}
			/>
		</Container>
	);
}
