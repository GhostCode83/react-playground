import React, { Component } from 'react';
import './App.css';
import Accordion from './state-drills/Accordion';




const sectionsProp = [
  {title: "Vegan", 
    content: "plants only"},
  {title: "Octo-Ovo Vegetarian", 
    content: "plants, dairy and eggs"},
  {title: "Omnivour", 
    content: "plants and aninimals"}

]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion sections={sectionsProp} />
      </div>

    );
  }
}

export default App;