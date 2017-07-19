import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IntroComponent from '../components/Intro';
import UserDataComponent from './UserData';
import CreateRestaurantFormContainer from './CreateRestaurantFormContainer';

const RouteContainer = () => (
  <Switch>
    <Route path="/" exact component={IntroComponent} />
    <Route path="/user" exact component={UserDataComponent} />
    <Route path="/createRestaurant" exact component={CreateRestaurantFormContainer} />
  </Switch>
);

export default RouteContainer;
