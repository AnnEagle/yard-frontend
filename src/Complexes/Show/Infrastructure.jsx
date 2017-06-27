import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Infrastructure = styled.div`
  padding-top: 2rem;
  padding-bottom: 56px;
  background-color: #ffffff;
`;

const Text = styled.p`
  font-family: 'Fira Sans';
  font-size: 1rem;
  line-height: 1.38;
  color: #3e4247;
  margin: 0;
  padding-bottom: 0.5rem;
`;

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.1;
  color: #3e4247;
  font-family: 'Philosopher';
  margin: 0px;
`;

export default () => (
  <Infrastructure>
    <Grid>
      <Title>Инфраструктура</Title>
      <Wrapper>
        <Row>
          <Col md={2}>
            <Text>Бассейн</Text>
          </Col>
          <Col md={2}>
            <Text>Детский сад</Text>
          </Col>
          <Col md={2}>
            <Text>Частная школа</Text>
          </Col>
          <Col md={2}>
            <Text>Бассейн</Text>
          </Col>
          <Col md={2}>
            <Text>Детский сад</Text>
          </Col>
          <Col md={2}>
            <Text>Частная школа</Text>
          </Col>
          <Col md={2}>
            <Text>Частная школа</Text>
          </Col>
          <Col md={2}>
            <Text>Частная школа</Text>
          </Col>
          <Col md={2}>
            <Text>Частная школа</Text>
          </Col>
        </Row>
      </Wrapper>
    </Grid>
  </Infrastructure>
  );
