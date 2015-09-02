import * as types from 'constants';
import {fetchActionCreator} from 'actions/fetchActionCreator';

let LOAD_POSTS = fetchActionCreator({
  url: 'http://jsonplaceholder.typicode.com/posts',
  type: types.LOAD_POSTS,
  cache: true,
  beginAction: types.LOAD_BEGIN,
  completeAction: types.LOAD_COMPLETE
});

let LOAD_USERS = fetchActionCreator({
  url: 'http://jsonplaceholder.typicode.com/users',
  type: types.LOAD_USERS,
  cache: true,
  beginAction: types.LOAD_BEGIN,
  completeAction: types.LOAD_COMPLETE
});

let LOAD_COMMENTS = fetchActionCreator({
  url: 'http://jsonplaceholder.typicode.com/comments',
  type: types.LOAD_COMMENTS,
  cache: true,
  beginAction: types.LOAD_BEGIN,
  completeAction: types.LOAD_COMPLETE
});

export {LOAD_POSTS, LOAD_USERS, LOAD_COMMENTS};
