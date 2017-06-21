import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";

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
  float: left;
  width: 464px;
  height: 350px;
  padding-right: 16.3px;
`;


const Name = styled.p`
  margin-top: 1.5rem;
  font-family: 'Monaco';
  color: #646971;
`;

const Address = styled.h3`
  font-size: 2.5rem;
  color: #000000;
  margin-top: 1.5rem;
  margin-bottom: 0;
  font-weight: bold;
  line-height: 1.4;
`;

const Info = styled.p`
  color: #3e4247;
  margin-top: 0.5rem;
  margin-right: 100.7px;
`;



export default props => {
  return (
    <Grid>
      <Card to="/">
        <Img src="{props.img}" />
        <Texts>
          <Name>{props.name}</Name>
          <Address>{props.address}</Address>
          <Info>{props.info}</Info>
        </Texts>
      </Card>
    </Grid>
  );
};