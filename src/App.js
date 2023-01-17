import React, { Component } from 'react';
import './App.css';

const Welcome = (props) =><h1 key={props.name}>Hola {props.name} </h1>;
class App extends Component {
  constructor() {
    super();
  
  this.state = {
    names: ["Juan", "Pedro", "Germán"]
  }
}

render() {
  return (
    <div>
      {this.state.names.map((name) =>
        <Welcome key={name} name={name} />
      )}
    </div>
    );
  }
}

export default App;
