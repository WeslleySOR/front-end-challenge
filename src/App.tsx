import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavigationBar } from "./components/NavigationBar"
import { ComponentsViewer } from "./pages/ComponentsViewer"
import { Exit } from "./pages/Exit"
import { Home } from "./pages/Home"
import { Container } from "./styles/app"
import { globalStyles } from "./styles/global"

function App() {
  globalStyles()

  return (
    <BrowserRouter>
      <Container>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/exit" element={<Exit/>}/>
          <Route path="/2" element={<ComponentsViewer/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
