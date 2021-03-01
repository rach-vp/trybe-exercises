import React, { Component } from 'react';
import { number } from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    index: number,
  }

  printOnConsole(input) {
    console.log(input);
  }

  render() {
    const { index, input, update } = this.props;

    return (
      <div>
        <button
          onClick={() => {
            this.printOnConsole.bind(this, input);
            update(index + 1);
          }}>
            {`Button ${index + 1}`}
        </button>
      </div>
    )
  }
}
