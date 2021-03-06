// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Complex from './Complexes/Show';
import Complexes from './Complexes/List';
import './App.css';

export default () => (
  <Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={Complexes} />
      <Route path="/complex/:id" component={Complex} />
      <Footer />
    </div>
  </Router>
);
