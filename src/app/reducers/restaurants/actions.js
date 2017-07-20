import firebase from 'firebase';

import { ADD_RESTAURANT } from './actionTypes';

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
