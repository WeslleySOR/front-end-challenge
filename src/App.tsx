import Modal from 'react-modal';

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavigationBar } from "./components/NavigationBar"
// import { ComponentsViewer } from "./pages/ComponentsViewer"
import { Exit } from "./pages/Exit"
import { History } from "./pages/History"
import { Home } from "./pages/Home"
import { Container } from "./styles/app"
import { globalStyles } from "./styles/global"
import { PaymentModal } from "./pages/Exit/Modal/Payment"
import { ExitModal } from './pages/Exit/Modal/Exit';

Modal.setAppElement('#root');

function App() {
  globalStyles()
  const [plateNumber, setPlateNumber] = useState('')
  const [isNewPaymentModalOpen, setIsNewPaymentModalOpen] = useState(false)
  const [isNewExitModalOpen, setIsNewExitModalOpen] = useState(false)

  function handleOpenNewPaymentModal() {
    setIsNewPaymentModalOpen(true);
  }

  function handleCloseNewPaymentModal() {
    setIsNewPaymentModalOpen(false);
  }

  function handleOpenNewExitModal() {
    setIsNewExitModalOpen(true);
  }

  function handleCloseNewExitModal() {
    setIsNewExitModalOpen(false);
  }
  return (
    <BrowserRouter>
      <Container>
        <NavigationBar/>
        <Routes>
          <Route index element={<Home plateNumber={plateNumber} setPlateNumber={setPlateNumber}/>}/>
          <Route path="/exit" element={<Exit plateNumber={plateNumber} setPlateNumber={setPlateNumber} onOpenNewPaymentModal={handleOpenNewPaymentModal} onOpenNewExitModal={handleOpenNewExitModal}/>}/>
          <Route path="/history/:id" element={<History/>}/>
          {/* <Route path="/2" element={<ComponentsViewer/>}/> */}
        </Routes>
      </Container>
      <PaymentModal plateNumber={plateNumber} isOpen={isNewPaymentModalOpen} onRequestClose={handleCloseNewPaymentModal}/>
      <ExitModal plateNumber={plateNumber} isOpen={isNewExitModalOpen} onRequestClose={handleCloseNewExitModal}/>
    </BrowserRouter>
  )
}

export default App
