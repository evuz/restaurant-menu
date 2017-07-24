import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRedirect = ({ component: Component, user, ...rest }) => {
  return (
    <Route { ...rest }
      render={(props) => (
        user.email ?
          <Component {...props} /> :
          <Redirect
            to="/"
          />
      )}
    />
  )
};

const mapStateToProps = (state) => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(PrivateRedirect));
