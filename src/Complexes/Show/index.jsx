import React from 'react';
import Heading from './Heading';
import ShortInfo from './ShortInfo';
import Specification from './Specification';
import Description from './Description';
import Infrastructure from './Infrastructure';
import OffersList from './OffersList';
import District from './District/District';
import Carousel from './Carousel';

export default () => (
  <div>
    <Heading />
    <Carousel />
    <ShortInfo />
    <Specification />
    <Description />
    <Infrastructure />
    <OffersList />
    <District />
  </div>
  );
