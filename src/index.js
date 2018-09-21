import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

  registerServiceWorker();
