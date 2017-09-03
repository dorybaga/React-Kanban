import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// create the store
// let store = createStore(

// )


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
