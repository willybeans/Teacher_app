import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';

import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import teacher from './ducks/teacher';
import students from './ducks/students';
import * as studentActions from './ducks/students';
import assignments from './ducks/assignments';
import login from './ducks/login';
import { login as loginAction } from './ducks/login';

const rootReducer = combineReducers({
  login: login,
  students: students,
  teacher: teacher,
  assignments: assignments
});

const store = createStore(rootReducer,
  {},
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
