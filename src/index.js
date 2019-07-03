import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app';
import './index.css';

import { Provider } from 'react-redux'
import store from './store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
