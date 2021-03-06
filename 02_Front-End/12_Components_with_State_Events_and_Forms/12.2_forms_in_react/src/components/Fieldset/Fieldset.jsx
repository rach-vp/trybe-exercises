import React, { Component } from 'react';
import FormInput from '../FormInput';
import SelectState from '../SelectState';
import TextArea from '../TextArea';

export default class Fieldset extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleName(input) {
    this.setState({ name: input.toUpperCase() });
  }

  handleAddress(input) {
    console.log(input);
    this.setState({ address: input.replace(/[^A-Za-z0-9 -]/, '')});
  }

  handleInput(input, fieldName) {
    switch (fieldName) {
      case 'name':
        return this.handleName(input);
      case 'address':
        return this.handleAddress(input);
      default:
        this.setState({ [fieldName]: input });
    }
  }

  render() {
    const { fieldGroup } = this.props;
    const { legend, fields } = fieldGroup;

    return (
      <fieldset>
        <legend>{legend}</legend>
        {
          fields.map(field =>
            field.tag === 'input'
              ? <FormInput
                key={field.fieldName}
                info={field}
                onInputChange={this.handleInput.bind(this)}
                value={
                  this.state[field.fieldName]
                    ? this.state[field.fieldName] : ''
                }
              />
              : field.tag === 'select' && field.fieldName === 'state'
                ? <SelectState
                  key={field.fieldName}
                  info={field}
                  onInputChange={this.handleInput.bind(this)}
                  value={
                    this.state[field.fieldName]
                      ? this.state[field.fieldName] : ''
                  } />
                : <TextArea
                  key={field.fieldName}
                  info={field}
                  onInputChange={this.handleInput.bind(this)}
                  value={
                    this.state[field.fieldName]
                      ? this.state[field.fieldName] : ''
                  } />
          )
        }
      </fieldset>
    )
  }
}
