import './App.css';
import ListaTareas from './componentes/listaTareas';

function App() {
  return (
    <div className="aplicaicon-tareas">
      <div className="logo-contenedor">
        <img src='logo192.png' 
        alt='logo' 
        className='logo' 
        />
      </div>
      <div className="tareas-lista-principal">
        <h1 className='titulo'>TAREAS</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
