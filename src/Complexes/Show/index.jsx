// @flow

import React, { Component } from 'react';
import Heading from './Heading';
import ShortInfo from './ShortInfo';
import Specification from './Specification';
import Description from './Description';
import Infrastructure from './Infrastructure';
import OffersList from './OffersList';
import District from './District/District';
import Carousel from './Carousel';
import { get } from '../../api';
import type { Complex as ComplexType } from '../types';

class ComplexesShow extends Component {
  state = {};
  state: ComplexType;

  componentDidMount() {
    get(`/complexes/${this.props.match.params.id}`).then(data => this.setState(data));
  }

  render() {
    const { name, location = {}, statistics = {}, images = [] } = this.state;

    return (
      <div>
        <Heading name={name} location={location} />
        <Carousel images={images} />
        <ShortInfo />
        <Specification statistics={statistics} />
        <Description />
        <Infrastructure />
        <OffersList />
        <District />
      </div>
    );
  }
}

export default ComplexesShow;
