import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Details = styled.div`
  margin-top: -154px;
`;

const Block = styled.div`
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
  background-color: white;
`;

const Neighborhood = styled.div`
  border-top: solid 1px #e0e0e1;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Name = styled.p`
  font-weight: 500;
  line-height: 1.38;
  color: #3e4247;
  margin: 0px;
`;

const Distance = styled.p`
  line-height: 1.38;
  text-align: left;
  color: #a9afb6;
  margin: 0px;
  margin-top: 8px;
`;

const Img = styled.img`
  width: 100%;
  height: 303px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
`;

export default () => {
  return (
    <Details>
      <Grid>
        <Row>
          <Col md={6}>
            <Img src={`${process.env.PUBLIC_URL}/img/map.png`} />
          </Col>
          <Col md={6}>
            <Block>
              <Neighborhood>
                <Name>Красный Октябрь</Name>
                <Distance>24 минуты, 6 км</Distance>
              </Neighborhood>
              <Neighborhood>
                <Name>World class</Name>
                <Distance>2 минуты, 300 м</Distance>
              </Neighborhood>
              <Neighborhood>
                <Name>Третьяковская галерея</Name>
                <Distance>14 минут, 4 км</Distance>
              </Neighborhood>
            </Block>
          </Col>
        </Row>
      </Grid>
    </Details>
  );
};
