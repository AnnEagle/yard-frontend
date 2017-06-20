import React from 'react';
import banner_image from '../img/compass-development-logo.png'
import styled from 'styled-components'

export default () => {
  return (
  	 <section className="banner">
      <img src={banner_image} alt="compass-development" className="banner-image"/>
    </section>
  );
};