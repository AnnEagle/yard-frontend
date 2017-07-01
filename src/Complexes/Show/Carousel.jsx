import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import { getImage } from '../../api';

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

export default props =>
  (<Carousel>
    <Wrapper>
      {props.images.map(image => <img src={getImage(image.id, 256)} alt="1" />)}
    </Wrapper>
    <Grid>
      <Row>
        <ButtonWrapper>
          <Button>41 фотография</Button>
        </ButtonWrapper>
      </Row>
    </Grid>
  </Carousel>);
