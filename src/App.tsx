import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container, Content, Main } from "./styles/app";
import { globalStyles } from "./styles/global";

import { NavigationBar } from "./components/NavigationBar";
import { Header } from "./components/Header";
import { MobileMenu } from "./components/Menu";

import { Exit } from "./pages/Exit";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

import { PlateContextProvider } from "./contexts/Plate";

import { useMenu } from "./hooks/useMenu";
import { useErrorMessage } from "./hooks/useErrorMessage";

function App() {
	globalStyles();
	const { isOpenedMenu, handleOpenedMenu } = useMenu();
	const { errorMessage, handleErrorMessage } = useErrorMessage();
	return (
		<PlateContextProvider>
			<BrowserRouter>
				<Container>
					<Header
						handleOpenedMenu={handleOpenedMenu}
						isOpenedMenu={isOpenedMenu}
					/>
					<Content>
						<Main isOpenedMenu={isOpenedMenu}>
							<NavigationBar />
							<Routes>
								<Route
									index
									element={
										<Home
											error={errorMessage}
											handleErrorMessage={handleErrorMessage}
										/>
									}
								/>
								<Route
									path="/exit"
									element={
										<Exit
											error={errorMessage}
											handleErrorMessage={handleErrorMessage}
										/>
									}
								/>
								<Route
									path="/history/:id"
									element={<History handleErrorMessage={handleErrorMessage} />}
								/>
							</Routes>
						</Main>
						<MobileMenu
							handleOpenedMenu={handleOpenedMenu}
							isOpened={isOpenedMenu}
						/>
					</Content>
				</Container>
			</BrowserRouter>
		</PlateContextProvider>
	);
}

export default App;
