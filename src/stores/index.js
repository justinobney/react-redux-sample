import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import {devTools} from 'redux-devtools';
import thunk from 'redux-thunk';

import {uiState} from 'reducers/uiState';
import {officeState} from 'reducers/offices';
import {posts} from 'reducers/posts';
import {users} from 'reducers/users';
import {comments} from 'reducers/comments';
import apiMiddleware from 'actions/apiMiddleware';

let reducerTree = {
  uiState,
  officeState,
  posts,
  users,
  comments
};

let buildStore;
/* eslint-disable */
if (__DEBUG__) {
/* eslint-enable */
  buildStore = compose(applyMiddleware(thunk, apiMiddleware), devTools(), createStore);
} else {
  buildStore = compose(applyMiddleware(thunk), createStore);
}

export default buildStore(combineReducers(reducerTree));
