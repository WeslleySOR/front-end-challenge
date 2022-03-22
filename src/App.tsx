import Modal from 'react-modal';

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavigationBar } from "./components/NavigationBar"
// import { ComponentsViewer } from "./pages/ComponentsViewer"
import { Exit } from "./pages/Exit"
import { History } from "./pages/History"
import { Home } from "./pages/Home"
import { Container, Content, Main, Menu } from "./styles/app"
import { globalStyles } from "./styles/global"
import { PaymentModal } from "./pages/Exit/Modal/Payment"
import { ExitModal } from './pages/Exit/Modal/Exit';
import { Header } from './components/Header';

Modal.setAppElement('#root');

function App() {
  globalStyles()
  const [plateNumber, setPlateNumber] = useState('')
  const [isNewPaymentModalOpen, setIsNewPaymentModalOpen] = useState(false)
  const [isNewExitModalOpen, setIsNewExitModalOpen] = useState(false)
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)

  const [exitError, setExitError] = useState('')

  const handleOpenedButton = () => {
      setIsOpenedMenu(!isOpenedMenu)
  }

  function handleOpenNewPaymentModal() {
    if(/^([a-z]{3}-[0-9]{4})$/.test(plateNumber)) setIsNewPaymentModalOpen(true);
    else alert('Digite uma placa válida!\nex: AAA-0000')
  }

  function handleCloseNewPaymentModal() {
    setIsNewPaymentModalOpen(false);
  }

  function handleOpenNewExitModal() {
    if(/^([a-z]{3}-[0-9]{4})$/.test(plateNumber)) setIsNewExitModalOpen(true);
    else alert('Digite uma placa válida!\nex: AAA-0000')
  }

  function handleCloseNewExitModal() {
    setIsNewExitModalOpen(false);
  }
  return (
    <BrowserRouter>
      <Container>
        <Header handleOpenedButton={handleOpenedButton} isOpenedMenu={isOpenedMenu}/> 
        <Content>
          <Main isOpenedMenu={isOpenedMenu}>
            <NavigationBar/>
            <Routes>
              <Route index element={<Home setExitError={setExitError} plateNumber={plateNumber} setPlateNumber={setPlateNumber}/>}/>
              <Route path="/exit" element={<Exit error={exitError} setError={setExitError}  plateNumber={plateNumber} setPlateNumber={setPlateNumber} onOpenNewPaymentModal={handleOpenNewPaymentModal} onOpenNewExitModal={handleOpenNewExitModal}/>}/>
              <Route path="/history/:id" element={<History/>}/>
              {/* <Route path="/2" element={<ComponentsViewer/>}/> */}
            </Routes>
          </Main>
          <Menu isOpened={isOpenedMenu}>
            <button><span>Entrada</span></button>
            <button><span>Saída</span></button>
          </Menu>
        </Content>
      </Container>
      <PaymentModal setError={setExitError} plateNumber={plateNumber} isOpen={isNewPaymentModalOpen} onRequestClose={handleCloseNewPaymentModal}/>
      <ExitModal setError={setExitError} plateNumber={plateNumber} isOpen={isNewExitModalOpen} onRequestClose={handleCloseNewExitModal}/>
    </BrowserRouter>
  )
}

export default App
