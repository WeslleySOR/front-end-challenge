import { ErrorContextProvider } from "./Error";
import { PlateContextProvider } from "./Plate";

const GlobalContext: React.FC = ({ children }) => {
    return (
        <>
            <PlateContextProvider>
                <ErrorContextProvider>
                    {children}
                </ErrorContextProvider>
            </PlateContextProvider>
        </>
    )
}

export default GlobalContext