import { Initial } from "./Initial";
import { Container } from "./style";

interface ExitProps {
	plateNumber: string;
	setPlateNumber: React.Dispatch<React.SetStateAction<string>>;
	onOpenNewPaymentModal: () => void;
	onOpenNewExitModal: () => void;
	error: string;
	handleErrorMessage: (newMessage: string) => void
}

export function Exit({
	onOpenNewExitModal,
	onOpenNewPaymentModal,
	plateNumber,
	setPlateNumber,
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
				setPlateNumber={setPlateNumber}
			/>
		</Container>
	);
}
