import React, { Component } from 'react';
import FormInput from '../FormInput';
import SelectState from '../SelectState';
import TextArea from '../TextArea';

export default class Fieldset extends Component {
  render() {
    const { fieldGroup } = this.props;
    const { legend, fields } = fieldGroup;

    return (
      <fieldset>
        <legend>{legend}</legend>
        {
          fields.map(field =>
            field.tag === 'input'
              ? <FormInput key={field.fieldName} info={field} />
              : field.tag === 'select' && field.fieldName === 'state'
                ? <SelectState key={field.fieldName} info={field} />
                : <TextArea key={field.fieldName} info={field} />
          )
        }
      </fieldset>
    )
  }
}
