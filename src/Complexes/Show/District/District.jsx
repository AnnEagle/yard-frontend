// @flow

import React from 'react';
import styled from 'styled-components';
import Shape from './Shape';
import Details from './Details';

const District = styled.section`
  padding-bottom: 4rem;
`;

export default () => (
  <District>
    <Shape />
    <Details />
  </District>
  );
