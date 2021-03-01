import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.buttons = Array.from({ length: 3 });
    this.state = {};
  }

  updateState(key) {
    this.setState((prevState, _props) => {
      const button = `button${key}`;
      if (this.state[button]) {
        return { ...this.state, [button]: prevState[button] + 1 };
      } else {
        return { ...this.state, [button]: 1 };
      }
    });
  }

  render() {
    return (
      <main>
        {this.buttons.map((button, index) => (
          <section>
            <Button
              key={index + 1}
              index={index}
              input={`You've just pressed button ${index + 1}`}
              update={this.updateState.bind(this)}
            />
            <span>{`Button ${index + 1} pressed ${
              this.state[`button${index + 1}`] || 0
            } time(s)`}</span>
          </section>
        ))}
      </main>
    );
  }
}

export default App;
