import "../style/boton.css";
import React from 'react';

class Boton extends React.Component {
    render() {
        return (
            <button
                className={this.props.botonclick ? "boton-click" : "boton-reiniciar"}
                onClick={this.props.manejoClick}>
                {this.props.texto}
            </button>
        )
    }
}

export default Boton;