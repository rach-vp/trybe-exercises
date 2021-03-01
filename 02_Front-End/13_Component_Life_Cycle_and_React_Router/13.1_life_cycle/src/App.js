import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       loading: true,
       url: '',
    }
    this.fetchDog = this.fetchDog.bind(this);
  }

  fetchDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(({ message }) => this.setState({ url: message, loading: false }))
      .catch(({ message }) => console.log(message));
  }

  componentDidMount() {
    this.fetchDog()
  }

  render() {
    const { loading, url } = this.state;

    return (
      <div className="App">
        <button onClick= { this.fetchDog }>Fetch new doggo!</button>
        <br />
        {
          loading
          ? <div>loading...</div>
          : <img src={ url } alt="Some cute doggo <3" />
        }
      </div>
    );
  }
}

export default App;
