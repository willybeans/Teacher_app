import { createStore, combineReducers } from 'redux';
import C from './constants';
import initialState from './initialState.json';

store.dispatch(loginAction("runlogin"));

store.dispatch(studentActions.addStudent({
  'studentID': '2',
  'teacherID': '0',
  'name': 'Wily beans',
  'email': 'cbeans.com',
  'age': 55
}));

store.dispatch(loginAction("runlogin"));
