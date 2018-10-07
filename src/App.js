import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import app from './components/mainscript';
import MainComponent from './components/main.component';

var router =  <Provider store={store}>
                        <Router history={browserHistory}>
                          <Route path="/" component={app} >

                          </Route>
                        </Router>
                    </Provider>
ReactDOM.render(router,
document.getElementById('content'));
