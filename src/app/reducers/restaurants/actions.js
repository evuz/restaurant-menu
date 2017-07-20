import firebase from 'firebase';

import {
  ADD_RESTAURANT,
  REMOVE_RESTAURANT_LIST
} from './actionTypes';

export function saveRestaurant(values) {
  console.log(values);
  const dbRef = firebase.database().ref('restaurants');
  dbRef.push().set(values)
}

export function addRestaurant(restaurant) {
  return {
    type: ADD_RESTAURANT,
    payload: {
      restaurant
    }
  }
}

export function removeRestaurantList() {
  return {
    type: REMOVE_RESTAURANT_LIST
  }
}
