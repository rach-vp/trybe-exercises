import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       loading: true,
       url: '',
       terrier: false,
       dogName: '',
       savedNames: [],
    }
    this.fetchDog = this.fetchDog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.clear = this.clear.bind(this);
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
            const breed = message.split('/')[4];
            alert(breed.replace('-', ' '));
          }
        )
      })
      .catch(({ message }) => console.log(message));
  }

  handleChange(e) {
    this.setState({ dogName: e.target.value })
  }

  save() {
    const { dogName, url } = this.state;
    this.setState(({ savedNames }) => (
      { savedNames: [...savedNames, { dogName, url }], dogName: '' }
    ),
      () => {
        const { savedNames } = this.state;
        localStorage.setItem('savedNames', JSON.stringify(savedNames));
      }
    )
  }

  clear() { localStorage.clear(); }

  componentDidMount() {
    if (localStorage.length) {
      const savedNames = JSON.parse(localStorage.getItem('savedNames'));
      const lastDogURL = Object.values(savedNames[savedNames.length - 1])[1];
      const lastDogName = Object.values(savedNames[savedNames.length - 1])[0];
      this.setState({ url: lastDogURL, loading: false, dogName: lastDogName });
    } else {
      this.fetchDog();
    }
  }

  render() {
    const { loading, url, terrier, dogName } = this.state;
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
            : (
                <div>
                  <label>
                    Give it a name:
                    <input type="text" onChange= { this.handleChange } value={ dogName }/>
                  </label>
                  <button onClick={ this.save }>Save</button>
                  <button onClick={ this.clear }>Clear storage</button>
                  <br />
                  <img src={ url } alt="Some cute doggo <3" style={{ width: "500px" }} />
                </div>
              )
        }
      </div>
    );
  }
}

export default App;
