import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       loading: true,
       url: '',
       terrier: false,
    }
    this.fetchDog = this.fetchDog.bind(this);
  }

  fetchDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(({ message }) => {
        this.setState(
          { loading: true, terrier: false },
          () => {
            if (message.includes('terrier')) {
              console.log(message);
              this.setState({ terrier: true, loading: false });
            } else {
              this.setState({ url: message, loading: false });
            }
            localStorage.setItem('url', message);
            const breed = message.split('/')[4];
            alert(breed.replace('-', ' '));
          }
        )
      })
      .catch(({ message }) => console.log(message));
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { loading, url, terrier } = this.state;
    const loadingComponent = <div>loading...</div>
    const noTerriersComponent = <div>Uh oh! Terriers are forbidden D=</div>

    return (
      <div className="App">
        <button onClick= { this.fetchDog }>Fetch new doggo!</button>
        <br />
        {
          loading
          ? loadingComponent
          : terrier
            ? noTerriersComponent
            : <img src={ url } alt="Some cute doggo <3" style={{ width: "500px" }} />
        }
      </div>
    );
  }
}

export default App;
