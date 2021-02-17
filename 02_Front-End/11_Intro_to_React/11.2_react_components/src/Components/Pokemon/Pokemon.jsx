import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    const { value, measurementUnit } = averageWeight;

    return (
      <section>
        <h4>{ name }</h4>
        <h5>{ type }</h5>
        <span>{ `${value}${measurementUnit}` }</span>
        <img src={ image } alt={ name }/>
      </section>
    )
  }
}

Pokemon.propType = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
  image: PropTypes.string,
};

Pokemon.defaultProps = {
  name: 'Pokemon name',
  type: 'Pokemon type',
  averageWeight: PropTypes.shape({
    value: 0,
    measurementUnit: 'Measurement unit for weight',
  }),
  image: 'Image source',
};
