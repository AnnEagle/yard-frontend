import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Offer = styled.div`
  background-color: #ffffff;
  padding: 1.5rem 2rem;
}
`;

const Title = styled.h3`
  font-family: Philosopher;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.13;
  text-align: left;
  color: #3e4247;
  margin: 0px;
`;

const Label = styled.p`
  line-height: 1.38;
  text-align: left;
  color: #a9afb6;
  margin: 0px;
  margin-top: 1.5rem;
`;

const Value = styled.p`
  line-height: 1.38;
  text-align: left;
  color: #3e4247;
  margin: 0px;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const Button = styled.button`
 text-align: center;;
  border-radius: 2px;
  background-color: #000000;
  font-family: "Fira Sans";
  font-size: 16px;
  line-height: 1;
  text-align: center;
  color: #ffffff;
  padding: 12px 2rem;
  border: none;
`;

export default props => {
  return (
    <Offer>
      <Title>{props.count}-комнатные квартиры</Title>
      <Label>Площадь</Label>
      <Value>От {props.square.min} до {props.square.max} м²`</Value>
      <Label>Стоимость</Label>
      <Value>от {props.price.min} до {props.price.max} млн руб</Value>
      <Row center="md">
        <Wrapper>
          <Button>Посмотреть предложения</Button>
        </Wrapper>
      </Row>
    </Offer>
  );
};
