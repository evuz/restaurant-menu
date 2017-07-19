import React, { Component } from 'react';

import HeaderComponent from './components/Header';
import Route from './containers/Route';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Route />
      </div>
    );
  }
}

export default App;
