import React, { Component } from 'react'

export default class SelectState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    const states = await fetch(url)
      .then(res => res.json())
      .catch(err => console.error(err));
    this.setState({ states, loading: false });
  }

  handleChange(e) {
    const input = e.target.value;
    this.props.onInputChange(input, this.fieldName);
  }

  render() {
    const { fieldName, required } = this.props.info;
    const { states, loading } = this.state;
    this.fieldName = fieldName;

    return (
      <form>
        <label htmlFor={fieldName}>State: </label>
        <select id={fieldName} required={required} onChange={this.handleChange.bind(this)}>
          <option key="empty" value="">Select your state</option>
          {!loading
            ? states.map(({ nome }) =>
              <option key={nome} value={nome}>{nome}</option>
            )
            : null
          }
        </select>
      </form>
    )
  }
}
