import * as types from 'constants';

let LOAD_POSTS = {
  url: 'http://jsonplaceholder.typicode.com/posts',
  type: types.LOAD_POSTS,
  cache: true,
  beginAction: types.LOAD_BEGIN,
  completeAction: types.LOAD_COMPLETE
};

let LOAD_USERS = {
  url: 'http://jsonplaceholder.typicode.com/users',
  type: types.LOAD_USERS,
  cache: true,
  beginAction: types.LOAD_BEGIN,
  completeAction: types.LOAD_COMPLETE
};

let LOAD_COMMENTS = {
  url: 'http://jsonplaceholder.typicode.com/comments',
  type: types.LOAD_COMMENTS,
  cache: true,
  beginAction: types.LOAD_BEGIN,
  completeAction: types.LOAD_COMPLETE
};

export {LOAD_POSTS, LOAD_USERS, LOAD_COMMENTS};
