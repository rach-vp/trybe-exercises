import React, { Component } from 'react';
import Fieldset from './components/Fieldset';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalFields: {
        legend: 'Personal Data',
        fields: [
          {
            fieldName: 'name',
            tag: 'input',
            type: 'text',
            maxLength: 40,
            required: true,
          },
          {
            fieldName: 'email',
            tag: 'input',
            type: 'email',
            maxLength: 50,
            required: true,
          },
          {
            fieldName: 'cpf',
            tag: 'input',
            type: 'text',
            maxLength: 11,
            required: true,
          },
          {
            fieldName: 'address',
            tag: 'input',
            type: 'text',
            maxLength: 200,
            required: true,
          },
          {
            fieldName: 'city',
            tag: 'input',
            type: 'text',
            maxLength: 28,
            required: true,
          },
          {
            fieldName: 'state',
            tag: 'select',
            required: true,
          }
        ],
      },
      jobFields: {
        legend: 'Last Job Info',
        fields: [
          {
            fieldName: 'CV Resume',
            tag: 'textarea',
            maxLength: 1000,
            required: true,
          },
          {
            fieldName: 'Role',
            tag: 'textarea',
            maxLength: 40,
            required: true,
          },
          {
            fieldName: 'Job Description',
            tag: 'textarea',
            maxLength: 500,
            required: true,
          }
        ]
      }
    };
  }

  render() {
    const { personalFields, jobFields } = this.state;
    return (
      <main>
        <Fieldset fieldGroup={ personalFields } />
        <Fieldset fieldGroup={ jobFields } />
      </main>
    );
  }
}

export default App;
