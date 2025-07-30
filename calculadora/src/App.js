import logo from "./logo.svg";
import "./App.css";
import Pantallac from "./componentes/pantallac";
import BotonClear from "./componentes/botonClear";
import { useState } from "react";
import { evaluate } from "mathjs";
import { esOperador, Boton } from "./componentes/boton";
function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    if (input.length === 0 && esOperador(valor)) {
      alert("No puedes iniciar con un operador");
    }else if(esOperador(valor) &&
    input.length > 0 &&
    esOperador(input.slice(-1))){
      alert("No puedes ingresar dos operadores seguidos");
    }else{
      setInput(input + valor);
    }
  };

  const calcularResultado = () => {
    try {
      if (input) {
        setInput(evaluate(input));
      } else {
        setInput("");
        alert("Debes ingresar valores");
      }
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="calculadora-contenedor">
        <Pantallac input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
