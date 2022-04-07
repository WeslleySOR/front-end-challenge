import { Initial } from "./Initial";
import { Container } from "./style";

interface ExitProps {
	plateNumber: string;
	handlePlateNumber: (newPlateNumber: string) => void
	onOpenNewPaymentModal: () => void;
	onOpenNewExitModal: () => void;
	error: string;
	handleErrorMessage: (newMessage: string) => void
}

export function Exit({
	onOpenNewExitModal,
	onOpenNewPaymentModal,
	plateNumber,
	handlePlateNumber,
	error,
	handleErrorMessage,
}: ExitProps) {
	return (
		<Container>
			<Initial
				error={error}
				handleErrorMessage={handleErrorMessage}
				onOpenNewPaymentModal={onOpenNewPaymentModal}
				onOpenNewExitModal={onOpenNewExitModal}
				plateNumber={plateNumber}
				handlePlateNumber={handlePlateNumber}
			/>
		</Container>
	);
}
