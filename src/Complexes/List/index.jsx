// @flow

import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Card from './Card';
import Banner from './Banner';
import Introduction from './Introduction';
import { get, getImage } from '../../api';
import type { Complex as ComplexType } from '../types';

const Article = styled.article`
  padding-bottom: 3rem;
`;

function renderComplexCard(complex: ComplexType) {
  const { regionName, street, house } = complex.location;
  const location = `${regionName ? `${regionName}, ` : ''}
                    ${street}
                    ${house ? `${house}` : ''}`;
  const imageId = complex.images[0].id;
  const imageUrl = getImage(imageId, 256);

  return (
    <Card id={complex.id} name={complex.name} location={location} image={imageUrl}>
      text
    </Card>
  );
}

class ComplexesList extends Component {
  state = {
    items: [],
  };
  state: {
    complexes: Array<ComplexType>,
  };

  componentDidMount() {
    get('/complexes?filter%5Bstate%5D=public').then(({ items: complexes = [] }) => {
      this.setState({ complexes });
    });
  }

  render() {
    const complexes = this.state.complexes || [];

    return (
      <div>
        <Article>
          <Banner />
          <Introduction />
          <Grid>
            {complexes.map(complex => renderComplexCard(complex))}
          </Grid>
        </Article>
      </div>
    );
  }
}

export default ComplexesList;
