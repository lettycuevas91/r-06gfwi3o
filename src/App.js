import React, { Component } from 'react';
import './App.css';

const Welcome = (props) =><h1>Hola {props.name} </h1>;
class App extends Component {

  render() {
    const names= ["Juan", "Pedro", "Germán"];
    return (
      <div>
        {names.map(name =><Welcome name={name} />)}
      </div>
    );
  }
}

export default App;
