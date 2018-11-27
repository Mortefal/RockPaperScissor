import React from 'react';
import '../Styling/Button.css';

const Buttonstyle = {
    margin: "40px"
}


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
        clickfunction: this.props.onClick,
    };
  }


  render() {
    return (
      <div>
        <button style={Buttonstyle} className="Round-button" value={this.state.name} onClick={this.state.clickfunction}>{this.state.name}</button>
      </div>
    );
  }
}
export default Button;
