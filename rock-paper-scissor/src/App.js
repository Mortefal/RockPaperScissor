import React, { Component } from 'react';
import Button from './Components/Button';
import Scoreboard from './Components/Scoreboard';
import {Row} from 'react-flexbox-grid';
import './Styling/App.css';
import Header from './Components/Header';

const RowStyle = {
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: 0,
        computer: 0,
        userChoice: '',
        computerChoice: '',
        winner: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
   winner(user, computer){
        switch (user + computer) {
            case 'RockScissor':
            case 'RockLizard':
            case 'ScissorPaper':
            case 'ScissorLizard':
            case 'PaperSpock':
            case 'PaperRock':
            case 'SpockScissor':
            case 'SpockRock':
            case 'LizardPaper':
            case 'LizardSpock':
                this.setState({
                        user: this.state.user + 1,
                        computer: this.state.computer,
                        winner: "User wins!"
                    })
                break
            case 'ScissorRock':
            case 'LizardRock':
            case 'PaperScissor':
            case 'LizardScissor':
            case 'SpockPaper':
            case 'RockPaper':
            case 'RockSpock':
            case 'ScissorSpock':
            case 'PaperLizard':
            case 'SpockLizard':
                this.setState({
                    user: this.state.user,
                    computer: this.state.computer + 1,
                    winner: "Computer wins!"
                })
                break
            default:
                this.setState({
                    user: this.state.user,
                    computer: this.state.computer,
                    winner: "Tie!"
                })
                break
        }


  }
    handleClick(e){
        let x = e.target.value;

        let y = this.computerPlays()
        this.setState({
            userChoice: x,
            computerChoice: y,
        })
        this.winner(x,y)


    }
    computerPlays(){
      let choices = ["Paper", "Rock", "Scissor", "Lizard", "Spock"];
      let random = Math.floor((Math.random() * 5));
      return choices[random]
    }


  render() {
    return (
      <div className="App">
        <Header />
        <Scoreboard user={this.state.user} computer={this.state.computer} />
          <h5>User played {this.state.userChoice} and computer played {this.state.computerChoice}</h5>
          <h6>{this.state.winner}</h6>
          <Row style={RowStyle}>
              <Button name="Paper" onClick={this.handleClick} />
              <Button name="Rock" onClick={this.handleClick}/>
              <Button name="Scissor" onClick={this.handleClick}/>
              <Button name="Lizard" onClick={this.handleClick}/>
              <Button name="Spock" onClick={this.handleClick}/>
          </Row>

      </div>
    );
  }
}

export default App;
