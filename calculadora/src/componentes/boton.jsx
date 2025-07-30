import "../style/boton.css";

function esOperador(valor) {
  return isNaN(valor) && valor !== '.' && valor !== '=';
}

function Boton(props) {

  return (
    <div
      onClick={() => props.manejarClic(props.children)}
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trim()}>
      {props.children}
    </div>
  )
}

export { Boton, esOperador };