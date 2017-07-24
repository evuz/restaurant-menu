import React, { Component } from 'react';
import { connect } from 'react-redux';

import RestauranListComponent from '../components/RestaurantList';
import { addRestaurant, removeRestaurantList } from '../reducers/restaurants';
import { listenOnAddRestaurant, listenOffAddRestaurant } from '../utils/api/restaurants';

class RestaurantListContainer extends Component {
  componentWillMount() {
    listenOnAddRestaurant(snapshot => {
      this.props.addRestaurant(snapshot.val());
    });
  }

  componentWillUnmount() {
    this.props.removeRestaurantList();
    listenOffAddRestaurant();
  }

  render() {
    return (
      <RestauranListComponent
        list={this.props.list}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.restaurants
})

const mapDispatchToProps = {
  addRestaurant,
  removeRestaurantList
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListContainer);
