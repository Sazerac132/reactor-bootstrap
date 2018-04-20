import * as React from "react";
import * as ReactDOM from "react-dom";

require('./index.html');
require('./base.scss');

import App from './modules/App';

ReactDOM.render(
    <App />,
    document.getElementById("app")
);