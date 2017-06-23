import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Heading from "./Heading";
import ShortInfo from "./ShortInfo";
import Specification from "./Specification";
import Description from "./Description";
import Infrastructure from "./Infrastructure";
import OffersList from "./OffersList";
import District from "./District/District";
import Carousel from "./Carousel";

export default () => {
  return (
    <div>
      <Heading />
      <Carousel />
      <ShortInfo />
      <Specification />
      <Description />
      <Infrastructure />
      <OffersList />
      <District />
    </div>
  );
};
