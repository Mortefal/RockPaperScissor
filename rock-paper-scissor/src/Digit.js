import React from 'react';

const DigitStyle = {
    fontSize: "48px"
}


class Digit extends React.Component {
  render() {
    return (
      <div>
        <label style={DigitStyle}>{this.props.digit}</label>
      </div>
    );
  }
}
export default Digit;
