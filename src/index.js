import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './stylesheets/main.scss';
import App from './components/App';
import {reducers} from './reducers/index';


let users = [];
for (let i = 1; i < 11; i++) {
  users.push({
    id:i,
    username:'empname'+i,
    job:'Jobid'+i
  })
}
//Create store
const initial_state = {
  users:users,
}
const storeStorage = createStore(reducers,initial_state);
ReactDOM.render(
  <Provider store={storeStorage}>
    <App/>
  </Provider>,
  document.getElementById('app'));


// We need to pass our state data to all components for that we use Provier component
// Inside the provider we have props store to which we pass our createdStore
