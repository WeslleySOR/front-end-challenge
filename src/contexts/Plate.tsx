import { createContext, ReactNode, useState } from "react";

type PlateContextProps = {
	children: ReactNode;
};

type PlateContextType = {
	plate: string;
	updatePlate: (newPlate: string) => void;
};

export const PlateContext = createContext<PlateContextType>(
	{} as PlateContextType
);

export const PlateContextProvider = ({ children }: PlateContextProps) => {
	const [plate, setPlate] = useState("");

	const updatePlate = (newPlate: string) => {
		setPlate(newPlate);
	};

    return (
        <PlateContext.Provider
            value={{
                plate,
                updatePlate
            }}
        >
            {children}
        </PlateContext.Provider>
    )
};
