import Modal from "react-modal";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Container, Content, Main } from "./styles/app";
import { globalStyles } from "./styles/global";

import { NavigationBar } from "./components/NavigationBar";
import { Header } from "./components/Header";
import { MobileMenu } from "./components/Menu";

import { Exit } from "./pages/Exit";
import { History } from "./pages/History";
import { Home } from "./pages/Home";
import { PaymentModal } from "./pages/Exit/Modal/Payment";
import { ExitModal } from "./pages/Exit/Modal/Exit";

import { usePlate } from "./hooks/usePlate";
import { useModal } from "./hooks/useModal";
import { useMenu } from "./hooks/useMenu";
import { useErrorMessage } from "./hooks/useErrorMessage";

Modal.setAppElement("#root");

function App() {
	globalStyles();
	const { plateNumber, setPlateNumber } = usePlate();
	const {
		isNewExitModalOpen,
		isNewPaymentModalOpen,
		handleOpenNewExitModal,
		handleCloseNewExitModal,
		handleOpenNewPaymentModal,
		handleCloseNewPaymentModal,
	} = useModal();
	const { isOpenedMenu, handleOpenedMenu } = useMenu();
	const { exitError, setExitError } = useErrorMessage();
	return (
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
										setExitError={setExitError}
										plateNumber={plateNumber}
										setPlateNumber={setPlateNumber}
									/>
								}
							/>
							<Route
								path="/exit"
								element={
									<Exit
										error={exitError}
										setError={setExitError}
										plateNumber={plateNumber}
										setPlateNumber={setPlateNumber}
										onOpenNewPaymentModal={handleOpenNewPaymentModal}
										onOpenNewExitModal={handleOpenNewExitModal}
									/>
								}
							/>
							<Route
								path="/history/:id"
								element={<History setError={setExitError} />}
							/>
						</Routes>
					</Main>
					<MobileMenu
						handleOpenedMenu={handleOpenedMenu}
						isOpened={isOpenedMenu}
					/>
				</Content>
			</Container>
			<PaymentModal
				setError={setExitError}
				plateNumber={plateNumber}
				isOpen={isNewPaymentModalOpen}
				onRequestClose={handleCloseNewPaymentModal}
			/>
			<ExitModal
				setError={setExitError}
				plateNumber={plateNumber}
				isOpen={isNewExitModalOpen}
				onRequestClose={handleCloseNewExitModal}
			/>
		</BrowserRouter>
	);
}

export default App;
