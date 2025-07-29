import "../style/contador.css";

function Contador(props){
    return (
        <div className="contador">
            <p>{props.numClicks}</p>
        </div>
    )
}

export default Contador;