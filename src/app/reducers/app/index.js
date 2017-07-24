import { INIT_APP } from './actionTypes';

export * from './actions';

const initialState = {
  initialized: false
}

function app(state = initialState, { type, payload }) {
  switch (type) {
    case INIT_APP:
      return Object.assign({}, state, { initialized: payload.value });
    default:
      return state;
  }
}

export default app;
