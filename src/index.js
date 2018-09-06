// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'
//
// ReactDOM.render(<App />,
// document.getElementById('root')
// );
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import C from './ducks/constants';
import initialState from './ducks/initialState';
import logger from 'redux-logger';

import {
  teacherReducer,
  addTeacher,
  editTeacherName,
  editTeacherEmail
} from './ducks/teacher';

import {
  studentReducer,
  addStudent
} from './ducks/students';

import {
  loginReducer,
  login
} from './ducks/login'

const rootReducer = combineReducers({
  login: loginReducer,
  student: studentReducer,
  teacher: teacherReducer
});

const store = createStore(rootReducer,
  {},
  applyMiddleware(thunkMiddleware, logger)
);

store.subscribe(() => {
  console.log("Store Updated!", store.getState());
});
//
// store.dispatch(editTeacherName('brian'));
// store.dispatch(editTeacherEmail('your@nallstar.com'));
store.dispatch(login("runlogin"));

store.dispatch(addStudent({
  'studentID': '2',
  'teacherID': '0',
  'name': 'Wily beans',
  'email': 'cbeans.com',
  'age': 55
}));

store.dispatch(login("runlogin"));
