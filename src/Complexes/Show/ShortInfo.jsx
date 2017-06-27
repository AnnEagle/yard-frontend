import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const ShortInfo = styled.div`
  padding-top: 24px;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Column = styled.div`
  margin-bottom: 1.5rem;
  margin-right: 3rem;
}
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

const Subtitle = styled.small`
  display: block;
  font-family: 'Fira Sans';
  font-size: 14px;
  font-weight: 300;
  line-height: 1.57;
  text-align: left;
  color: #a9afb6;
`;

const Line = styled.hr`
  margin: 0;
  border: none;
  height: 0px;
  border-bottom: 1px solid #e0e0e1;
`;

export default () =>
  (<ShortInfo>
    <Grid>
      <Wrapper>
        <Column>
          <Title>
            950
            <Subtitle>предложений</Subtitle>
          </Title>
        </Column>
        <Column>
          <Title>
            John McAslan + Partners
            <Subtitle>архитектор</Subtitle>
          </Title>
        </Column>
        <Column>
          <Title>
            Группа «ПСН»
            <Subtitle>застройщик</Subtitle>
          </Title>
        </Column>
      </Wrapper>
      <Line />
    </Grid>
  </ShortInfo>);
