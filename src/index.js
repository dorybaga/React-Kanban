import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import reducers from './reducers';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  reducers,
  applyMiddleware(ReduxThunk)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();