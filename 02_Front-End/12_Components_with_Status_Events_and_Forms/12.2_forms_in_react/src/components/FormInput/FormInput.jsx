import React, { Component } from 'react';

export default class FormInput extends Component {
  render() {
    const { info } = this.props;
    const { fieldName, type, maxLength, required } = info;

    return (
      <form>
        <label htmlFor={fieldName}>{`${fieldName}:`}</label>
        <input type={type} id={fieldName} maxLength={maxLength} required={required} />
      </form>
    )
  }
}
