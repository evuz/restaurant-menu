import { SET_USER } from './actionTypes';

export * from './actions';

function user(state = {}, {type, payload}) {
  switch (type) {
    case SET_USER:
      return payload.user;
    default:
      return state;
  }
}

export default user;
