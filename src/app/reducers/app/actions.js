import { INIT_APP } from './actionTypes';

export function initApp(value) {
  return {
    type: INIT_APP,
    payload: {
      value
    }
  }
}
