import React from 'react';
import {Route} from 'react-router';
import App from 'components/App';
import Home from 'components/Home';
import OfficeLayout, * as Offices from 'components/offices';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route component={OfficeLayout}>
      <Route path="/offices" component={Offices.List} />
      <Route path="/offices/:officeId/details" component={Offices.Detail} />
    </Route>
  </Route>
);

export default routes;
