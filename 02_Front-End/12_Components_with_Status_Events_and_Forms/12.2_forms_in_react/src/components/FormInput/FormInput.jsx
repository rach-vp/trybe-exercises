import React, { Component } from 'react';

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  handleName(input) {
    this.setState({ name: input.toUpperCase() });
  }

  handleInput(e) {
    const input = e.target.value;
    switch (this.fieldName) {
      case 'name':
        return this.handleName(input);
      default:
      this.setState((prevState, _props) => ({ [this.type]: input }));
    }
  }

  render() {
    const { info } = this.props;
    const { fieldName, type, maxLength, required } = info;
    this.fieldName = fieldName;

    return (
      <form>
        <label htmlFor={fieldName}>{`${fieldName}:`}</label>
        <input
          type={type}
          id={fieldName}
          maxLength={maxLength}
          required={required}
          onChange={this.handleInput.bind(this)}
          value={
            Object.keys(this.state).includes(fieldName)
            ? this.state[fieldName]
            : ''
          }
        />
      </form>
    )
  }
}
