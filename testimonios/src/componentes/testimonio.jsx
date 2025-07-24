import '../estilos/Testimonios.css';

export function Testimonio(props){
  const partes = props.texto.split(/(tecnología)/);

  return (
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio"
        src={require(`../imagenes/${props.imagen}`)} 
        alt={`Imagen de ${props.nombre}`} />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} - <strong>{props.email}</strong></p>
          {partes.map((trozo, idx) => 
            // 2) Si este trozo, en minúscula, es exactamente "tecnologia"…
            trozo.toLowerCase() === 'tecnología'
              // 3) …lo envolvemos en <strong>
              ? <strong key={idx}>{trozo}</strong>
              // 4) …si no, lo devolvemos tal cual
              : trozo
          )}
      </div>
    </div>
  );
}