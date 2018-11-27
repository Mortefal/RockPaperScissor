import React from 'react';
import '../Styling/Header.css';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0E0B16",
    color: "white",
    minHeight: "150px",
    fontSize: "32px",
}

const Header = () => (
  <div>
    <header style={style}>Rock-Paper-Scissors-Lizard-Spock!</header>
  </div>
);
export default Header;
