import './App.css';
import logo from './logo.svg';
import Boton from './contenedores/Boton.jsx';
import Contador from './contenedores/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const botonclick = () =>{
    setNumClicks(numClicks + 1);
  }
  const resetear = () =>{
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='App-logo-contenedor'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <Contador numClicks={numClicks} />

      <div className="contenedor-principal">
        <Boton texto="Click Me" botonclick={true} manejoClick={botonclick} />
        <Boton texto="Resetear" botonclick={false} manejoClick={resetear} />
      </div>
    </div>
  );
}

export default App;
