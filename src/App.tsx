import { AbaButton } from "./components/Button/Aba"
import { ButtonGreen } from "./components/Button/Green"
import { NoBorderButton } from "./components/Button/NoBorder"
import { ButtonPurplePrimary } from "./components/Button/Purple/Primary"
import { ButtonPurpleSecondary } from "./components/Button/Purple/Secondary"
import { globalStyles } from "./styles/global"

function App() {
  globalStyles()

  return (
    <div>
      <div>
        <ButtonGreen isActive={false}>CONFIRMAR ENTRADA</ButtonGreen>
        <ButtonGreen isActive={true}>CONFIRMAR ENTRADA</ButtonGreen>
      </div>
      <div>
        <ButtonPurplePrimary isActive={false}>PAGAMENTO</ButtonPurplePrimary>
        <ButtonPurplePrimary isActive={true}>PAGAMENTO</ButtonPurplePrimary>
      </div>
      <div>
        <ButtonPurpleSecondary isActive={false}>SAÍDA</ButtonPurpleSecondary>
        <ButtonPurpleSecondary isActive={true}>SAÍDA</ButtonPurpleSecondary>
      </div>
      <div>
        <AbaButton isActive={false}>Entrada</AbaButton>
        <AbaButton isActive={true}>Saída</AbaButton>
      </div>
      <NoBorderButton>Ver Histórico</NoBorderButton>
    </div>
  )
}

export default App
