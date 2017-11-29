import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {browserHistory,Router,Route,IndexRoute} from 'react-router';
import {syncHistoryWithStore,routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux';
import './stylesheets/main.scss';
import {reducers} from './reducers/index';
import App from './components/App';
import Home from './pages/Home';
import UserEdit from './pages/UserEdit';
import NotFound from './pages/NotFound';

let users = [];
for (let i = 1; i < 30; i++) {
  users.push({
    id:i,
    username:'Employee '+i,
    job:'Job '+i
  })
}

//Create store
const initial_state = {
  users:{
    list:users,
  }
}
let middleware = applyMiddleware(routerMiddleware(browserHistory));
const store = createStore(reducers,initial_state,middleware);
const history = syncHistoryWithStore(browserHistory,store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="user-edit(/:id)" component={UserEdit}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));


// We need to pass our state data to all components for that we use Provier component
// Inside the provider we have props store to which we pass our createdStore
