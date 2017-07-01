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

class ComplexesShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
