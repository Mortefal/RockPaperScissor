import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button.js'
import Scoreboard from './Scoreboard';
import './App.css';
import Header from "./Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 0,
            computer: 0,
        }
    }

    render() {
    return (
      <div className="App">
        <Header/>
        <Scoreboard user={this.state.user} computer={this.state.computer}/>
        <Button name="Paper"/>
        <Button name="Rock"/>
        <Button name="Scissors"/>
      </div>
    );
  }
}

export default App;
