import firebase from 'firebase';

import {
  ADD_RESTAURANT,
  REMOVE_RESTAURANT_LIST
} from './actionTypes';
import { getCleanedString } from '../../utils/filters/cleanString';

export function saveRestaurant(values) {
  console.log(values);
  const city = getCleanedString(values.city);
  const name = getCleanedString(values.name);
  firebase.database().ref(`/cities/${city}/${name}`).set(true);
  firebase.database().ref(`/restaurants/${name}`).set(values);
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
