import React from 'react';
import { Route, IndexRoute } from 'react-router';

import './styles/app.scss';

import App from './containers/App';
import LoginContainer from './containers/login';
import NotFoundContainer from './containers/not-found';

export default (
  <Route path="/" component={App} />
);
