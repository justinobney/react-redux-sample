let cachedData = {};

const apiMiddleware = store => next => action => {
  let {url, type} = action.payload || {};
  if (action.type === 'API_FETCH' && url && type) {
    let config = action.payload;
    let beginAction      = config.beginAction     || `${config.type}_BEGIN`;
    let successAction    = config.successAction   || `${config.type}_SUCCESS`;
    let errorAction      = config.errorAction     || `${config.type}_ERROR`;
    let completeAction   = config.completeAction  || `${config.type}_COMPLETE`;
    let settings         = config.fetchSettings   || {};

    if (config.cache && cachedData[config.type]) {
      return next(action);
    }

    store.dispatch({type: beginAction});
    fetch(config.url, settings)
      .then(resp => resp.json())
      .then(onSuccess, onError)
      .then(()=>store.dispatch({type: completeAction}));

    function onSuccess(json) {
      store.dispatch({type: successAction, payload: json});

      if (config.cache) {
        cachedData[config.type] = json;
      }
    }

    function onError(error) {
      store.dispatch({type: errorAction, error});
    }
  } else {
    return next(action);
  }
};

let api = {
  fetch: (payload)=> ({type: 'API_FETCH', payload})
};

export default apiMiddleware;
export {api};
