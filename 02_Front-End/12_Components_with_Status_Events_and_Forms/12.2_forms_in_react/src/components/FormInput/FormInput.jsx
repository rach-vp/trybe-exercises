import React, { Component } from 'react';
export default class FormInput extends Component {
  handleInput(e) {
    const input = e.target.value;
    this.props.onInputChange(input, this.fieldName);
  }

  render() {
    const { fieldName, type, maxLength, required } = this.props.info;
    const value = this.props.value;
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
          value={value}
        />
      </form>
    )
  }
}
