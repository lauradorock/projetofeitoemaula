import Rotas from "./Rotas/Rotas";
import { GlobalStyle } from "./GlobalStyled";
import { GlobalState } from "./GlobalState/GlobalState";


function App() {

  return (
    <>
      <GlobalStyle />

      <GlobalState>
        <Rotas />
      </GlobalState>
    </>
  )
}

export default App