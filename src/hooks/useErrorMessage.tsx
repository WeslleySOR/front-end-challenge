import { useState } from "react";

export function useErrorMessage() {
	const [exitError, setExitError] = useState("");

	return { exitError, setExitError };
}
