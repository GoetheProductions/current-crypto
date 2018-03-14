import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import routes from './routes';
import App from './containers/App';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);


// <Provider store={store}>
//   <Router history={browserHistory} routes={routes} />
// </Provider> ,
