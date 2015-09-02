import React from 'react/addons';
import {Route} from 'react-router';
import App from 'components/App';
import Home from 'components/Home';
import OfficeLayout, * as Offices from 'components/offices';
import Posts from 'components/posts/Posts.js';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route component={OfficeLayout}>
      <Route path="/offices" component={Offices.List} />
      <Route path="/offices/:officeId/details" component={Offices.Detail} />
    </Route>
    <Route path="/posts" component={Posts} />
  </Route>
);

export default routes;
