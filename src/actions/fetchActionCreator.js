export function fetchActionCreator(config = {}) {
  if (!config.url || !config.type) {
    throw new Error('Invalid fetchActionCreator settings');
  }

  let cachedData = null;

  let beginAction      = config.beginAction     || `${config.type}_BEGIN`;
  let successAction    = config.successAction   || `${config.type}_SUCCESS`;
  let errorAction      = config.errorAction     || `${config.type}_ERROR`;
  let completeAction   = config.completeAction  || `${config.type}_COMPLETE`;
  let settings         = config.fetchSettings   || {};

  return (settingsOveride) => {
    Object.assign(settings, settingsOveride);

    return (dispatch) => {
      if (config.cache && cachedData) {
        dispatch({type: successAction, payload: cachedData});
      } else {
        dispatch({type: beginAction});

        fetch(config.url, settings)
          .then(resp => resp.json())
          .then(onSuccess, onError)
          .then(()=>dispatch({type: completeAction}));
      }

      function onSuccess(json) {
        dispatch({type: successAction, payload: json});

        if (config.cache) {
          cachedData = json;
        }
      }

      function onError(error) {
        dispatch({type: errorAction, error});
      }
    };
  };
}
