import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Pokemon extends Component {
 render() {
    const { name, type, averageWeight, image } = this.props;
    const { value, measurementUnit } = averageWeight;

    return (
      <section className="pokemon">
        <h4 className="pokemon__name">{name}</h4>
        <h5 className="pokemon__type" data-type={type}>{type}</h5>
        <span className="pokemon__weight">{`${value}${measurementUnit}`}</span>
        <img className="pokemon__image" src={image} alt={name} />
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
