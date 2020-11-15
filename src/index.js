import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

const Root = () => (
  <>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
        <Route path={`${process.env.PUBLIC_URL}/index`} component={App} />
      </Switch>
    </BrowserRouter>
  </>
)

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
