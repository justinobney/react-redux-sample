import {LOAD_COMMENTS_SUCCESS} from 'constants';

const initialState = [];

export function comments(state = initialState, action) {
  const {type} = action;
  switch (type) {
    case LOAD_COMMENTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
