import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import arrow_img from "./img/arrow.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = styled.footer`
  background: #111111;
  color: #ffffff;
  padding-top: 2rem;
  padding-bottom: 0;
  padding-bottom: 1.5rem;
`;

const Title = styled.h4`
  font-weight: bold;
  color: #646971;
  font-size: 14px;
  margin-top: 1rem;
  margin-bottom: 0;
`;

const Line = styled.hr`
  margin: 0;
  border: none;
  height: 2px;
  background-color: #3e4247;
`;

const Contact = styled.p`
  margin-bottom: 0;
  margin-top: 0.5rem;
  color: #a9afb6;
  font-size: 14px;
  font-weight: 300;
`;

const AccentContact = styled(Contact)`
  margin-top: 1rem;
`;

const ColumnLink = styled(Link)`
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: #ffffff;
  display: block;
  margin-top: 8px;
  text-decoration: none;
`;

const AccentColumnLink = styled(ColumnLink)`
  margin-top: 1rem;
`;

const Disclaimer = styled.p`
  font-size: 11px;
  color: #a9afb6;
  font-weight: 300;
  margin-top: 6rem;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col md={2}>
            <Title>ООО «Ярд»</Title>
            <Contact>ОГРН 1175074002531</Contact>
            <Contact>ИНН 5036165365</Contact>
            <AccentContact>+7 (999) 821-14-88</AccentContact>
          </Col>
          <Col md={2} mdOffset={2}>
            <Line />
            <Title>Жилые комплексы</Title>
            <ColumnLink to="/">ВТБ Арена Парк</ColumnLink>
            <ColumnLink to="/">Садовые кварталы</ColumnLink>
            <ColumnLink to="/">Резиденция Монэ</ColumnLink>
            <AccentColumnLink to="/">
              Все ЖК Москвы
              <img src={arrow_img} />
            </AccentColumnLink>
          </Col>
          <Col md={2}>
            <Line />
            <Title>Компания</Title>
            <ColumnLink to="/">Команда</ColumnLink>
            <ColumnLink to="/">О компании</ColumnLink>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={4}>
            <Disclaimer>
              Любая информация, представленная на данном сайте, носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями статьи 437 ГК
              РФ. © ООО «Ярд», 2017
            </Disclaimer>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};
