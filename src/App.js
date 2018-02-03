import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu/menu.js'
import Infobar from './infobar/Infobar.js'
import Board from './Board/Board.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cube Friendly</h1>
        </header>
        <Infobar />
        <div className="Lower-area">
          <Menu />
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
