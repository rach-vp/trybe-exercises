import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    const { fieldName, maxLength, required } = this.props.info;

    return (
      <form>
        <label htmlFor={fieldName}>{`${fieldName}:`}</label>
        <textarea id={fieldName} cols="30" rows="10" maxLength={maxLength} required={required}></textarea>
      </form>
    )
  }
}
