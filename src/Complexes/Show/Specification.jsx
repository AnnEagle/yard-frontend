// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Specification = styled.div`
  padding-top: 2rem;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  margin-top: 0.5rem;
`;

const Block = styled.dl`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0px;
  margin-right: 1.75rem;
`;

const Label = styled.dt`
  font-family: 'Fira Sans';
  font-size: 1rem;
  line-height: 1.38;
  color: #a9afb6;
  width: 50%;
`;

const Value = styled.dd`
  font-family: 'Fira Sans'
  font-size: 1rem;
  line-height: 1.56;
  color: #3e4247;
  font-weight: 500;
  width: 50%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-family: 'Philosopher';
  font-weight: bold;
  line-height: 1.25;
  color: #3e4247;
  margin-top: 0;
  margin-bottom: 0;
`;

function getMinPrice(price) {
  return price ? price.from.rub : 0;
}

function getMaxPrice(price) {
  return price ? price.to.rub : 0;
}

type SpecificationType = {
  statistics: Object
}

export default (props: SpecificationType) =>
  (<Specification>
    <Grid>
      <Title>Характеристики</Title>
      <Wrapper>
        <Row>
          <Col md={4}>
            <Block>
              <Label>Количество квартир:</Label>
              <Value>{props.statistics.propertiesCount}</Value>
            </Block>
            <Block>
              <Label>Статус:</Label>
              <Value>Квартиры</Value>
            </Block>
            <Block>
              <Label>Цены:</Label>
              <Value>
                от {getMinPrice(props.statistics.price)} до {getMaxPrice(props.statistics.price)}{' '}
                руб.{' '}
              </Value>
            </Block>
          </Col>
          <Col md={4}>
            <Block>
              <Label>Количество квартир:</Label>
              <Value>{props.statistics.propertiesCount}</Value>
            </Block>
            <Block>
              <Label>Количество квартир:</Label>
              <Value>{props.statistics.propertiesCount}</Value>
            </Block>
            <Block>
              <Label>Количество квартир:</Label>
              <Value>{props.statistics.propertiesCount}</Value>
            </Block>
          </Col>
          <Col md={4}>
            <Block>
              <Label>Количество квартир:</Label>
              <Value>{props.statistics.propertiesCount}</Value>
            </Block>
            <Block>
              <Label>Количество квартир:</Label>
              <Value>{props.statistics.propertiesCount}</Value>
            </Block>
            <Block>
              <Label>Количество квартир:</Label>
              <Value>{props.statistics.propertiesCount}</Value>
            </Block>
          </Col>
        </Row>
      </Wrapper>
    </Grid>
  </Specification>);
