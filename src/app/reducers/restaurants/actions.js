import {
  ADD_RESTAURANT,
  REMOVE_RESTAURANT_LIST
} from './actionTypes';

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
