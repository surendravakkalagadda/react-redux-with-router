import React from 'react';
import { render} from 'react-dom';
import {Router,Route} from 'react-router-dom';
import { createHashHistory } from 'history';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers'
import App from './app/app';
import About from './app/about';
import Home from './app/home'
import Root from './app/root';;

let history = createHashHistory();
const store = createStore(allReducers);

render(

  <Provider store={store}>
  <Router history= {history} >
    <div>
    <Root>
      <Route exact path="/" component= {App} />
      <Route  path="/home" component= {Home} />
      <Route  path="/about" component= {About} />
      </Root>
    </div>
 </Router>
 </Provider>
  , document.getElementById('root'));
