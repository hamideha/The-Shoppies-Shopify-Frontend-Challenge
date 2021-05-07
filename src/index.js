import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Store from './store/state'

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
);