import React, {Component} from 'react/addons';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import * as store from 'stores';
import {DevTools, LogMonitor, DebugPanel} from 'redux-devtools/lib/react';
import routes from '../routes';

/* eslint-disable */
function renderDevTools() {
    if (__DEBUG__) {
        return (
            <DebugPanel top right
                bottom key="debugPanel">
              <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
      );
    }
}
/* eslint-enable */

export default class Root extends Component {
    displayName = 'Root component'
    render() {
        const {history} = this.props;
        return (
            <div>
                <Provider store={store}>
                    {() =>
                        <Router history={history}>
                            {routes}
                        </Router>}
                </Provider>
                {renderDevTools()}
            </div>
        );
    }
}

