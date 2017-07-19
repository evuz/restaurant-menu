import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import firebase from 'firebase';

import configureStore from './configureStore';
import configFirebase from './configFirebase';
import registerServiceWorker from './registerServiceWorker';

import App from './app/App';

import './index.css';

const { store, history } = configureStore();
firebase.initializeApp(configFirebase);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
