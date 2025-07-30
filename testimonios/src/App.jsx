import "./App.css";
import { Testimonio } from "./componentes/testimonio";
import {testimonios} from "./datos/testimonios";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>Estos son nuestros Testimonios</h1>
          {testimonios.map((t) =>(
            <Testimonio 
              nombre={t.nombre}
              pais={t.pais}
              imagen={t.imagen}
              cargo={t.cargo}
              email={t.email}
              texto={t.texto} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
