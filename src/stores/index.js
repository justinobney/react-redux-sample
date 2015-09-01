import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {devTools} from 'redux-devtools';
import thunk from 'redux-thunk';

import {uiState} from 'reducers/uiState';
import {officeState} from 'reducers/offices';

let reducerTree = {
  uiState,
  officeState
};

let buildStore;
/* eslint-disable */
if (__DEBUG__) {
/* eslint-enable */
  buildStore = compose(applyMiddleware(thunk), devTools(), createStore);
} else {
  buildStore = compose(applyMiddleware(thunk), createStore);
}

export default buildStore(combineReducers(reducerTree));
