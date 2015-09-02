import {BUTTON_CLICK, LOAD_BEGIN, LOAD_COMPLETE} from 'constants';

const initialUiState = {
  clicks: 0,
  loading: {
    pending: 0,
    complete: 0
  }
};

export function uiState(state = initialUiState, action) {
    const {type} = action;
    let loading;

    switch (type) {
        case BUTTON_CLICK:
          let clicks = state.clicks + 1;
          return Object.assign({}, state, {clicks});
        case LOAD_BEGIN:
          loading = Object.assign({}, state.loading, {pending: state.loading.pending + 1});
          return Object.assign({}, state, {loading});
        case LOAD_COMPLETE:
          let pending = state.loading.pending;
          let complete = state.loading.complete + 1;
          if (complete === pending) {
            complete = 0;
            pending = 0;
          }
          loading = Object.assign({}, state.loading, {pending, complete});
          return Object.assign({}, state, {loading});
        default:
            return state;
    }
}
