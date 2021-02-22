import React, { Component } from "react";
import Button from "./components/Button/Button";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.buttons = Array.from({ length: 3 });
  }

  render() {
    return (
      <main>
        {this.buttons.map((button, index) => (
          <Button index={index} input={`You've just pressed button ${index + 1}`} />
        ))}
      </main>
    );
  }
}

export default App;
