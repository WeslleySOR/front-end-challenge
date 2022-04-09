import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container, Content, Main } from "./styles/app";
import { globalStyles } from "./styles/global";

import { NavigationBar } from "./components/NavigationBar";
import { Header } from "./components/Header";
import { MobileMenu } from "./components/Menu";

import { Exit } from "./pages/Exit";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

import GlobalContext from "./contexts";

import { useMenu } from "./hooks/useMenu";

function App() {
	globalStyles();
	const { isOpenedMenu, handleOpenedMenu } = useMenu();
	return (
		<GlobalContext>
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
								<Route index element={<Home />} />
								<Route path="/exit" element={<Exit />} />
								<Route path="/history/:id" element={<History />} />
							</Routes>
						</Main>
						<MobileMenu
							handleOpenedMenu={handleOpenedMenu}
							isOpened={isOpenedMenu}
						/>
					</Content>
				</Container>
			</BrowserRouter>
		</GlobalContext>
	);
}

export default App;
