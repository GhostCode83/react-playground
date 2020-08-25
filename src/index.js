import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

ReactDOM.render(<RouletteGun chamber={8}/>, document.getElementById('root'));
