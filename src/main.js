import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';

import { Provider } from 'react-redux';
import store from './store';

require('./index.html');
require('./base.scss');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);