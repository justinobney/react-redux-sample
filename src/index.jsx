import 'babel-core/polyfill';
import React from 'react/addons';
import Root from './containers/Root';
import HashHistory from 'react-router/lib/HashHistory';

let history = new HashHistory();

React.render(
    <Root history={history}/>,
        document.getElementById('container')
);
