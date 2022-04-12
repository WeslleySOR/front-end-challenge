import { createContext, ReactNode, useEffect, useState } from "react";

type ErrorContextProps = {
	children: ReactNode;
};

type ErrorContextType = {
	error: string;
	updateError: (newError: string) => void;
};

export const ErrorContext = createContext<ErrorContextType>(
	{} as ErrorContextType
);

export const ErrorContextProvider = ({ children }: ErrorContextProps) => {
	const [error, setError] = useState("");

	const updateError = (newError: string) => {
		setError(newError);
	};
	return (
		<ErrorContext.Provider
			value={{
				error,
				updateError,
			}}
		>
			{children}
		</ErrorContext.Provider>
	);
};
