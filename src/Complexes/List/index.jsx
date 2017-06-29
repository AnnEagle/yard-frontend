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

function getCard(complex) {
  const { countryName, regionName } = complex.location;
  const location = `${regionName}, ${countryName}`;
  const imageId = complex.images[0].id;
  const imageUrl = getImage(imageId);

  return <Card id={complex.id} name={complex.name} location={location} image={imageUrl} />;
}

class ComplexesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    get('/complexes?filter[state]=public').then(json => this.setState(json));
  }

  render() {
    const complexes = this.state.items || [];

    return (
      <div>
        <Article>
          <Banner />
          <Introduction />
          <Grid>
            {complexes.map(complex => getCard(complex))}
          </Grid>
        </Article>
      </div>
    );
  }
}

export default ComplexesList;
