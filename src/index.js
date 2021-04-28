import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import App from './App';

//redux configuration
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  //Provide the store previously created to all the application
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
