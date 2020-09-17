import React, { useState } from "react";
import Error from "./Error";
import shortId from 'shortid'

let Formulario = ({setGasto,setCrearGasto}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    //validad
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      return setError(true);
    }
    setError(false)
    //constriut el gasto
    let gasto = {
      nombre,
      cantidad,
      id:shortId.generate()
    }
    //pasar el gasto al componente principa
    setGasto(gasto);
    //resetear el form
    setNombre('')
    setCantidad(0)
    setCrearGasto(true)
   
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
     {error ?<Error mensaje="Ambos campos son obligatorios"/> :null } 
      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transport"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Cantidad gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 3000"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value), 10)}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar gasto"
        />
      </div>
    </form>
  );
};

export default Formulario;
