import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { createHashHistory } from 'history';

import user from './app/reducers/user';

function configureStore() {
  const history = createHashHistory();
  const appReducers = combineReducers({
    route: routerReducer,
    user
  });

  let enhacer;
  if (process.env.NODE_ENV === 'development') {
    enhacer = compose(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  } else {
    enhacer = compose(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
    )
  }

  return { store: createStore(appReducers, enhacer), history };
}

export default configureStore;
