// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Heading = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  background-color: #ffffff;
`;

const Name = styled.h1`
  font-size: 2rem;
  font-family: 'Philosopher';
  line-height: 1.13;
  color: #3e4247;
  font-weight: bold;
  margin-top: 0px;
  margin-right: 0px;
  margin-left: 0px;
  margin-bottom: 8px;
`;

const Address = styled.p`
  font-size: 14px;
  font-family: 'Fira Sans';
  line-height: 1.57;
  font-weight: 300;
  color: #a9afb6;
  margin-top: 0px;
  margin-right: 0px;
  margin-left: 0px;
  margin-bottom: 0;
`;

const Button = styled.button`
  border-radius: 2px;
  border: solid 1px #e0e0e1;
  font-size: 10px;
  font-weight: 300;
  line-height: 1;
  color: #00779a;
  padding: 0.5rem 1rem;
  background: transparent;
`;

function getLocation({ subLocalityName, street, house, postalCode }) {
  return `${subLocalityName ? `${subLocalityName}, ` : ''}
          ${street ? `${street}, ` : ''}
          ${house ? `${house}, ` : ''}
          ${postalCode ? ` • ${postalCode}` : ''}`;
}

type HeadingProps = {
  name: string,
  location: Object,
};

export default (props: HeadingProps) =>
  (<Heading>
    <Grid>
      <Row between="md">
        <Col md={8}>
          <Name>{props.name}</Name>
          <Address>
            {getLocation(props.location)}
          </Address>
        </Col>
        <Col>
          <Button>В избранное</Button>
        </Col>
      </Row>
    </Grid>
  </Heading>);
