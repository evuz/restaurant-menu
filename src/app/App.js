import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

import Loading from './components/Loading';
import HeaderContainer from './containers/Header';
import Route from './containers/Route';
import { setUser } from './reducers/user';
import { initApp } from './reducers/app';

import './App.css';

class App extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.setUser(user || {});
      this.props.initApp(true);
    });
  }

  render() {
    const { app: { initialized } } = this.props;
    return (
      initialized ?
        <div className="App">
          <HeaderContainer />
          <Route />
        </div> :
        <div className="App">
          <Loading />
        </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  app
});

const mapDispatchToProps = {
  setUser,
  initApp
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
