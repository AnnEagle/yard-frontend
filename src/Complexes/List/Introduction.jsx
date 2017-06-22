import React from "react";
import styled from "styled-components";

const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #3E4247;
  display: block;
  margin-top: 0;
  margin-bottom: 0;
`;

const Introduction = styled.section`
  margin-left: 8rem;
  margin-right: 8rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: #3E4247;
  padding-top: 4rem; 
`;

const Button = styled.button`
  background-color: #000000;
  color: white;
  font-family: 'Fira Sans';
  font-size: 16px;
  padding: 13px 31px;
  border-style: none;
  border-radius: 2px;
  margin-top: 16px;
`;

export default () => {
  return (
    <Introduction>
      <Title>Discover Our New Developments</Title>
        <Description>
          Compass brings a modern approach to new development marketing and
          sales. From boutique rental conversions to luxurious ground-up
          condominiums, browse our portfolio of current offerings.
        </Description>
      <Button>Contact The Team</Button>
    </Introduction>
  );
};
