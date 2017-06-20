import React, { Component } from 'react';
import '../normalize.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'

import Banner from './Banner'
import Introduction from './Introduction'

export default () => {
  return (
    <div>
    <Banner/>
    <Introduction/>
    </div>
  );
}
