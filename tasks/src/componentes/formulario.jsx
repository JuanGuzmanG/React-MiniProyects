import "../style/Formulario.css";
import { useState } from "react";
import { v4 as UUID } from "uuid";

function Formulario(props) {

  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: UUID(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  };

  return (
    <form
    onSubmit={manejarEnvio}
    className="tarea-formulario"
    action="">
      <input 
      className="tarea-input"
      placeholder="Escribe una tarea"
      name="texto"
      type="text"
      onChange={manejarCambio}
      />
      <button 
      className="tarea-boton">
        Agregar
      </button>
    </form>
  );
}

export default Formulario;