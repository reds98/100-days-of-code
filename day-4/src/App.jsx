import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppClima from "./components/AppClima";
import {ClimaProvider} from "./context/ClimaProvider";
function App() {
  const [count, setCount] = useState(0);

  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppClima/>
    </ClimaProvider>
  ) 
}

export default App;
