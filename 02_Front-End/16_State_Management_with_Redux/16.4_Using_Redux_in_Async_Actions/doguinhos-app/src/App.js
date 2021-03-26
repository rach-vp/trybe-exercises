import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './store';

class App extends Component {
  render() {
    const { isFetching, src, fetchDog } = this.props;

    return (
      isFetching
      ? <p>Loading...</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={ fetchDog }
            type="button"
          >
            Novo Doguinho
          </button>
          <img src={ src } alt="dog" style={{ height: '200px' }} />
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
