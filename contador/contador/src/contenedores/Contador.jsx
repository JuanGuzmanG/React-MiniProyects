import "../style/contador.css";
import React from 'react';

class Contador extends React.Component {
  render() {
    return (
      <div className="contador">
        <p>{this.props.numClicks}</p>
      </div>
    )
  }
}

export default Contador;