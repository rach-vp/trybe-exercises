import React, { Component } from 'react'

export default class TextArea extends Component {
  handleInput(e) {
    const input = e.target.value;
    this.props.onInputChange(input, this.fieldName);
  }

  render() {
    const { fieldName, maxLength, required } = this.props.info;
    const value = this.props.value;
    this.fieldName = fieldName;

    return (
      <form>
        <label htmlFor={fieldName}>{`${fieldName}:`}</label>
        <textarea
          id={fieldName}
          cols="30"
          rows="10"
          maxLength={maxLength}
          required={required}
          onChange={this.handleInput.bind(this)}
          value={value}
        />
      </form>
    )
  }
}
