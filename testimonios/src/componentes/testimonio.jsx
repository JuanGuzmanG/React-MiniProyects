import '../estilos/Testimonios.css';
import React from 'react';

class Testimonio extends React.Component {
  render() {
    return (
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../imagenes/${this.props.imagen}`)}
          alt={`Imagen de ${this.props.nombre}`} />

        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
          <p className="cargo-testimonio">{this.props.cargo} - <strong>{this.props.email}</strong></p>
          {this.props.texto.split(/(tecnología)/).map((trozo, idx) =>
            trozo.toLowerCase() === 'tecnología'
              ? <strong key={idx}>{trozo}</strong>
              : trozo
          )}
        </div>
      </div>
    );
  }
}

export { Testimonio };