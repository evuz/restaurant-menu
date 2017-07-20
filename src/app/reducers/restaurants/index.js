import {
  ADD_RESTAURANT,
  REMOVE_RESTAURANT_LIST
} from './actionTypes';

export * from './actions';

function restaurants(state = [], { type, payload }) {
  switch (type) {
    case ADD_RESTAURANT:
      return state.concat(payload.restaurant);
    case REMOVE_RESTAURANT_LIST:
      return [];
    default:
      return state;
  }
}

export default restaurants;
