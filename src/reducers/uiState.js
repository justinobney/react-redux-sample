import {BUTTON_CLICK} from 'constants';

const initialUiState = {
  clicks: 0
};

export function uiState(state = initialUiState, action) {
    const {type} = action;

    switch (type) {
        case BUTTON_CLICK:
          let clicks = state.clicks + 1;
          return Object.assign({}, state, {clicks});
        default:
            return state;
    }
}
