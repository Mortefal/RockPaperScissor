import React from 'react';
import Digit from './Digit';
import './Scoreboard.css';
import {Row, Col} from 'react-flexbox-grid';

const ScoreBox = {
    background: "dimgrey",
    width: "200px",
    height: "75px",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: "10px",
    border: "solid red",
    padding: "20px"
}




class Scoreboard extends React.Component {

  render() {
    const { user, computer } = this.props;
    return (
      <div style={ScoreBox}>
          <Row center="xs">
              <Col xs={4}>
                  <Digit digit={user}/>
              </Col>
              <Col xs={4}>
                  <label style={{fontSize: "48px"}}>:</label>
              </Col>
              <Col xs={4}>
                  <Digit digit={computer}/>
              </Col>
          </Row>
      </div>
    );
  }
}
export default Scoreboard;
