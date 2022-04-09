import { ErrorContextProvider } from "./Error";
import { MenuContextProvider } from "./Menu";
import { PlateContextProvider } from "./Plate";

const GlobalContext: React.FC = ({ children }) => {
	return (
		<>
			<PlateContextProvider>
				<ErrorContextProvider>
					<MenuContextProvider>{children}</MenuContextProvider>
				</ErrorContextProvider>
			</PlateContextProvider>
		</>
	);
};

export default GlobalContext;
