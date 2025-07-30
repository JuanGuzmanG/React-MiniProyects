import "./App.css";
import logo from "./logo.svg";
import Boton from "./contenedores/Boton.jsx";
import Contador from "./contenedores/Contador.jsx";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.manejoClick = this.manejoClick.bind(this);
    this.resetear = this.resetear.bind(this);
  }

  manejoClick(){
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }
  resetear() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className="App-logo-contenedor">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Contador numClicks={this.state.numClicks} />

        <div className="contenedor-principal">
          <Boton 
          texto="Click Me" 
          botonclick={true} 
          manejoClick={this.manejoClick} />
          <Boton 
          texto="Resetear" 
          botonclick={false} 
          manejoClick={this.resetear} />
        </div>
      </div>
    );
  }
}

export default App;
