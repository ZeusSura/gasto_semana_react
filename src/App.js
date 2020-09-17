import React, { useState,useEffect} from "react";
import Pregunta from "./Components/Pregunta";
import Formulario from "./Components/Formulario";
import Listado from "./Components/ListaGastos";
import ControlPresupuesto from "./Components/ControlPresupuesto";
import "./App.css";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto,setGasto] = useState({});
  const [crearGasto,setCrearGasto]= useState(false)

  //useEffect actualiza el restante 
  useEffect(()=>{

    if(crearGasto){
      setGastos([...gastos, gasto]);
    }
    setCrearGasto(false)
   
  },[gasto,gastos,crearGasto])

  //Agregar nuevo gasto
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto}
                setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
