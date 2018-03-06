import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux';

import App from './containers/RootContainer'
import './style/common.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
