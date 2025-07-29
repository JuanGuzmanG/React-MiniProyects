import "../style/boton.css";

function Boton({texto, botonclick, manejoClick}){
    return(
        <button 
        className={botonclick ? "boton-click" : "boton-reiniciar"}
        onClick={manejoClick}>
            {texto}
        </button>
    )
}

export default Boton;