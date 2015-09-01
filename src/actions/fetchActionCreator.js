export function fetchActionCreator(config = {}) {
  if (!config.url || !config.type) {
    throw new Error('Invalid fetchActionCreator settings');
  }

  let beginAction   = config.beginAction   || `${config.type}_BEGIN`;
  let successAction = config.successAction || `${config.type}_SUCCESS`;
  let errorAction   = config.errorAction   || `${config.type}_ERROR`;
  let settings      = config.fetchSettings || {};

  return (settingsOveride) => {
    Object.assign(settings, settingsOveride);

    return (dispatch, getState) => {
      dispatch({type: beginAction});

      fetch(config.url, settings)
        .then(resp => resp.json())
        .then(onSuccess, onError);

      function onSuccess(json) {
        dispatch({type: successAction, payload: json});
      }

      function onError(error) {
        dispatch({type: errorAction, error});
      }
    };
  };
}