// @flow

import React from 'react';
import type { Children } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  margin-bottom: 3rem;
  background: #ffffff;
  border-bottom: solid 2px #646971;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
  }
`;

const Texts = styled.div`
`;

const Img = styled.img`
  width: 484px;
  height: 350px;
  padding-right: 1rem;
  flex-shrink: 0;
`;

const Location = styled.p`
  margin-top: 1.5rem;
  font-family: 'Monaco';
  color: #646971;
`;

const Name = styled.h3`
  font-family: 'Fira Sans', sans-serif;
  font-size: 2.5rem;
  color: #000000;
  margin-top: 1.5rem;
  margin-bottom: 0;
  font-weight: bold;
  line-height: 1.4;
`;

const Info = styled.p`
  font-family: 'Fira Sans', sans-serif;
  color: #3e4247;
  margin-top: 0.5rem;
  margin-right: 100.7px;
`;

type CardProps = {
  id: number,
  image: string,
  location: string,
  name: string,
  children: Children
}

export default (props: CardProps) =>
  (<Grid>
    <Card to={`/complex/${props.id}`}>
      <Img src={props.image} />
      <Texts>
        <Location>{props.location}</Location>
        <Name>{props.name}</Name>
        <Info>{props.children}</Info>
      </Texts>
    </Card>
  </Grid>);
