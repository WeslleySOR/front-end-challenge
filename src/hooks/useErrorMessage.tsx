import { useState } from "react";

export function useErrorMessage() {
	const [errorMessage, setErrorMessage] = useState("");

	const handleErrorMessage = (newMessage: string) => {
		setErrorMessage(newMessage);
	};

	return { errorMessage, handleErrorMessage };
}
