import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

const Carousel = styled.section`
`;

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  margin: -3rem 0 0 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 2px;
  border: 0;
  background-color: #00779a;
  font-family: 'Fira Sans';
  font-size: 10px;
  font-weight: 300;
  line-height: 1;
  color: #ffffff;
`;

export default () => (
  <Carousel>
    <Wrapper>
      <img src={`${process.env.PUBLIC_URL}/img/bitmap1-2.png`} alt="1" />
      <img src={`${process.env.PUBLIC_URL}/img/bitmap2-2.png`} alt="2" />
      <img src={`${process.env.PUBLIC_URL}/img/bitmap3-2.png`} alt="3" />
      <img src={`${process.env.PUBLIC_URL}/img/bitmap4-2.png`} alt="4" />
      <img src={`${process.env.PUBLIC_URL}/img/bitmap5-2.jpg`} alt="5" />
      <img src={`${process.env.PUBLIC_URL}/img/bitmap1-2.png`} alt="1" />
      <img src={`${process.env.PUBLIC_URL}/img/bitmap2-2.png`} alt="2" />
      <img src={`${process.env.PUBLIC_URL}/img/bitmap3-2.png`} alt="3" />
      <img src={`${process.env.PUBLIC_URL}/img/bitmap4-2.png`} alt="4" />
      <img src={`${process.env.PUBLIC_URL}/img/bitmap5-2.jpg`} alt="5" />
    </Wrapper>
    <Grid>
      <Row>
        <ButtonWrapper>
          <Button>41 фотография</Button>
        </ButtonWrapper>
      </Row>
    </Grid>
  </Carousel>
  );
