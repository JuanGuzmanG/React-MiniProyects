import "../style/listaTarea.css";
import Formulario from "./formulario";
import { useState } from "react";
import Tarea from "./tarea";

function ListaTareas() {
  
  const [tareas, setTareas] = useState([]);
  
  const completarTarea = id => {
    const nuevasTareas = tareas.map(t => {
      if (t.id === id) {
        return { ...t, completada: !t.completada };
      }
      return t;
    });
    setTareas(nuevasTareas);
  };

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      setTareas([tarea, ...tareas]);
    } else {
      alert("La tarea no puede estar vacía");
    }
  };

  const eliminarTarea = id => {
    const nuevasTareas = tareas.filter(t => t.id !== id);
    setTareas(nuevasTareas);
  };

  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea 
          key={tarea.id}
          id={tarea.id} 
          texto={tarea.texto} 
          completada={tarea.completada}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea} />
        ))}
      </div>
    </>
  );
}

export default ListaTareas;