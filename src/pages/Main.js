import React, { Component } from "react";
import Hero from "../images/Hero.png";
import Logo from "../images/Logo.png";

import "../Stylesheets/main.css";

class Main extends Component {
  render() {
    return (
      <>
        <header>
          <img id="hero" src={Hero} alt='>>> print("HELLO WORLD")' height="100px" width="100%" />
        </header>

        <main>
          <img id="logo" src={Logo} alt="Success Web Development logo" />
        </main>
      </>
    );
  }
}

export default Main;
