import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';

import RestauranListComponent from '../components/RestaurantList';
import { addRestaurant, removeRestaurantList } from '../reducers/restaurants';

class RestaurantListContainer extends Component {
  componentWillMount() {
    firebase.database().ref('restaurants')
      .on('child_added', snapshot => {
        this.props.addRestaurant(snapshot.val());
      });
  }

  componentWillUnmount() {
    this.props.removeRestaurantList();
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
