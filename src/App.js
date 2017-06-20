import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Complexes from './Complexes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Complexes} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
