import {LOAD_USERS_SUCCESS} from 'constants';

const initialState = [];

export function users(state = initialState, action) {
  const {type} = action;
  switch (type) {
    case LOAD_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
