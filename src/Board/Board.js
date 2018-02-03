import React, { Component } from 'react';
import './Board.css'
import Game from './Game.js'

export default class Board extends React.Component{
  constructor(props){
    super(props)
    this.state = {activePlayer: "Jasper", created: false, game: ""};
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleNextMove = this.handleNextMove.bind(this);
    this.assignUniqueSpaces = this.assignUniqueSpaces.bind(this);
    }

  handleCreateClick(){
    let playerNames = ["Giel", "Jeroen", "Lieke"];
    playerNames.push(this.state.activePlayer);
    let thisGame = new Game(playerNames);
    this.setState({created: true, game: thisGame});
    }

  handleNextMove(){
    this.assignUniqueSpaces();
    console.log(this.state);
  }

  assignUniqueSpaces(){
    console.log(this.state.game.existingTypes);
    console.log(this.state.game.existingTypes.length);
    for(let i=this.state.game.existingTypes.length; i<this.state.game.numSpaces.length; i++){
      while (true){
        let randomType = this.state.game.possibleTypes[Math.floor(Math.random()*this.state.game.possibleTypes.length)]
        console.log(randomType);
        if(!this.state.game.existingTypes.contains(randomType)){
          this.state.game.existingTypes.push(randomType);
          break;
        }
      }

    }

  }

  render() {
    const init = this.state.created;
    console.log(init);
    return (
      <div className="GameInfo">
        <div className="infoHeader">
        There are {this.state.game.numPlayers} players playing.<br />
        </div>
        {init ? (
          <button onClick={this.handleNextMove}>Next Computer Player Move</button>
        ) : (
          <button onClick={this.handleCreateClick}>Create New Game</button>
        )
        }
      </div>
    );
  }
}
