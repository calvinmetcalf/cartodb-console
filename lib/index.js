import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';
import {render} from 'react-dom';
import DevTools from './devTools';
import App from './app.js';
import 'whatwg-fetch';
import './bootstrap';
let finalCreateStore;
if (process.env.NODE_ENV === 'production') {
  finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
} else {
  finalCreateStore =  compose(applyMiddleware(promiseMiddleware), DevTools.instrument())(createStore);
}
let store = finalCreateStore(reducers);
render((
  <Provider store={store}>
    <div>
      <App />

      {process.env.NODE_ENV === 'production' ? <div /> : <DevTools />}
    </div>
  </Provider>
), document.getElementById('app'));
