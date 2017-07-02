// @flow

import React from 'react';
import styled from 'styled-components';
import compassLogo from '../../img/compass-development-logo.png';

const Wrapper = styled.section`
  background-color: #161616;
  text-align: center;
  padding-bottom: 5rem;
  margin-bottom: 0px;
  padding-top: 5rem;
  margin-top: 0px;
`;

const Banner = styled.img`
  width: 419px;
  height: 131px;
`;

export default () =>
  (<Wrapper>
    <Banner src={compassLogo} alt="compassLogo" />
  </Wrapper>);
