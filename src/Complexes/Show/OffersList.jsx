import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Offer from "./Offer";

const Offers = styled.section`
  background-color: #f4f5f9;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Title = styled.h2`
  text-align: center;
  font-family: Philosopher;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  color: #3e4247;
  margin: 0;
`;

const Wrapper = styled.div`
  margin-top: 1.5rem;
`;

export default () => {
  return (
    <Offers>
      <Grid>
        <Title>Предложения в ЖК «Полянка/44»</Title>
        <Wrapper>
          <Row>
            <Col md={4}>
              <Offer
                count={1}
                square={{min:59, max:120}}
                price={{min:20.3, max:84.2}}
              />
            </Col>
            <Col md={4}>
              <Offer
                count={2}
                square={{min:59, max:120}}
                price={{min:20.3, max:84.2}}
              />
            </Col>
            <Col md={4}>
              <Offer
                count={3}
                square={{min:59, max:120}}
                price={{min:20.3, max:84.2}}
              />
            </Col>
          </Row>
        </Wrapper>
      </Grid>
    </Offers>
  );
};
