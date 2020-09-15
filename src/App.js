import React, { useState } from "react";
import Pregunta from "./Components/Pregunta";
import "./App.css";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restate, setRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">
          <Pregunta 
          setPresupuesto={setPresupuesto} 
          setRestante={setRestante}
           />
        </div>
      </header>
    </div>
  );
}

export default App;
