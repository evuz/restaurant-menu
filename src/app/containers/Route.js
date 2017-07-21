import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IntroComponent from '../components/Intro';
import UserDataComponent from './UserData';
import PrivateRoute from './PrivateRoute';
import CreateRestaurantFormContainer from './CreateRestaurantFormContainer';
import RestaurantListContainer from './RestaurantList';

const RouteContainer = () => (
  <Switch>
    <Route path="/" exact component={IntroComponent} />
    <Route path="/user" exact component={UserDataComponent} />
    <PrivateRoute path="/createRestaurant" exact component={CreateRestaurantFormContainer} />
    <Route path="/restaurants" exact component={RestaurantListContainer} />
  </Switch>
);

export default RouteContainer;
