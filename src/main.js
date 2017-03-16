import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App/App.jsx';

require('./index.html');
require('./base.scss');

ReactDOM.render(<App />, document.getElementById('app'));