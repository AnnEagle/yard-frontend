import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";

const Back = styled.div`
  padding-top: 4rem;
  background-color: #3e4247;
  padding-bottom: 13.5rem;
`;

const Introduce = styled.div`
  margin-top: 7.25rem;
`;

const Name = styled.p`
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: bold;
  color: #a9afb6;
  margin: 0px;
`;

const Description = styled.p`
  font-family: 'Philosopher';
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.25;
  color: #ffffff;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const GuideLink = styled(Link)`
  text-decoration: none;
  text-align: left;
  color: #00779a;
`;

const Img = styled.img`
  width: 100%;
`;

export default () => {
  return (
    <Back>
      <Grid>
        <Row>
          <Col md={6}>
            <Introduce>
              <Name>
                Якиманка
              </Name>
              <Description>
                Исторический центр Москвы в двух километрах от Кремля
              </Description>
              <GuideLink to="/">
                Гид по Якиманке →
              </GuideLink>
            </Introduce>
          </Col>
          <Col md={6}>
            <Img src={`${process.env.PUBLIC_URL}/img/polyanka-photo.png`} />
          </Col>
        </Row>
      </Grid>
    </Back>
  );
};
