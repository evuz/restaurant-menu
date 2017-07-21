import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

import { createBrowserHistory } from 'history';

import user from './app/reducers/user';
import restaurants from './app/reducers/restaurants';

function configureStore() {
  const history = createBrowserHistory();
  const appReducers = combineReducers({
    route: routerReducer,
    form: formReducer,
    user,
    restaurants
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
