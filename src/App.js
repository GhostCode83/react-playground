import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <HelloWorld />

      </div>

    );
  }
}

export default App;