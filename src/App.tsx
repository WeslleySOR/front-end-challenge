import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalContext from "./contexts";
import { MenuContext } from "./contexts/Menu";

import { Exit } from "./pages/Exit";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

import { NavigationBar } from "./components/NavigationBar";
import { Header } from "./components/Header";
import { MobileMenu } from "./components/Menu";

import { Container, Content, Main } from "./styles/app";
import { globalStyles } from "./styles/global";
function App() {
	globalStyles();
	const { menu } = useContext(MenuContext);
	return (
		<GlobalContext>
			<BrowserRouter>
				<Container>
					<Header />
					<Content>
						<Main isOpenedMenu={menu}>
							<NavigationBar />
							<Routes>
								<Route index element={<Home />} />
								<Route path="/exit" element={<Exit />} />
								<Route path="/history/:id" element={<History />} />
							</Routes>
						</Main>
						<MobileMenu />
					</Content>
				</Container>
			</BrowserRouter>
		</GlobalContext>
	);
}

export default App;
