import {LOAD_POSTS_SUCCESS} from 'constants';

const initialState = [];

export function posts(state = initialState, action) {
  const {type} = action;
  switch (type) {
    case LOAD_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
