import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import teacher from './teacher';
import students from './students';
import * as studentActions from './students';
import assignments from './assignments';
import login from './login';
import { login as loginAction } from './login';

const rootReducer = combineReducers({
  login,
  students,
  teacher,
  assignments
});

export default rootReducer;

export function configureStore() {
  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunkMiddleware, logger)
  );
  //add auth check
  return store;
}
