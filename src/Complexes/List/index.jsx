import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Card from './Card';
import Banner from './Banner';
import Introduction from './Introduction';
import { get, getImage } from '../../api';

const Article = styled.article`
  padding-bottom: 3rem;
`;

function renderComplexCard(complex) {
  const { regionName, street, house } = complex.location;
  const location = `${regionName}, ${street}, ${house}`;
  const imageId = complex.images[0].id;
  const imageUrl = getImage(imageId, 256);

  return <Card id={complex.id} name={complex.name} location={location} image={imageUrl} />;
}

class ComplexesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    get('/complexes?filter[state]=public').then(({ items: complexes = [] }) => {
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
