import { ADD_RESTAURANT } from './actionTypes';

export * from './actions';

function restaurants(state = [], {type, payload}) {
  switch (type) {
    case ADD_RESTAURANT:
      return state.concat(payload.restaurant)
    default:
      return state;
  }
}

export default restaurants;
