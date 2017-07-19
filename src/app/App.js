import React, { Component } from 'react';

import HeaderContainer from './containers/Header';
import Route from './containers/Route';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <Route />
      </div>
    );
  }
}

export default App;
