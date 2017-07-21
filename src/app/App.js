import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

import HeaderContainer from './containers/Header';
import Route from './containers/Route';
import { setUser } from './reducers/user';

import './App.css';

class App extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.setUser(user);
    });
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <Route />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setUser
}

export default withRouter(connect(null, mapDispatchToProps)(App));
