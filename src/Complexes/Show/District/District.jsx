import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import Shape from "./Shape";
import Details from "./Details";

const District = styled.section`
  padding-bottom: 4rem;
`;

export default () => {
  return (
    <District>
      <Shape />
      <Details />
    </District>
  );
};
