import React, { Component } from "react";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import pokemons from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.pokemons = pokemons;
  }

  render() {
    return <Pokedex pokemons={this.pokemons} />;
  }
}

export default App;
