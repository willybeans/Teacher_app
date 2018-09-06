import { createStore, combineReducers } from 'redux';
import C from './constants';
import initialState from './initialState.json';

console.log(`

	Initial state
	=============

	Name: ${JSON.stringify(initalState.teacher)}


`);

const addAssignment = (assignment) => {
  return {
    type: C.ADD_ASSIGNMENT,
    payload: assignment
  };
};

const editAssignment = (assignment) => {
  return {
    type: C.EDIT_ASSIGNMENT,
    payload: assignment
  };
};

const deleteAssignment = (assignment) => {
  return {
    type: C.DELETE_ASSIGNMENT,
    payload: assignment
  };
};

const assignmentReducer = (state = initialState, action) => {
  switch(action.type){
  case C.ADD_ASSIGNMENT:
    return {
      ...state,
      'assignments': action.payload
    };
    break;
  case C.EDIT_ASSIGNMENT:
    break;
  case C.DELETE_ASSIGNMENT:
    break;
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  login: loginReducer,
  teacher: teacherReducer,
  assignments: assignmentReducer,
  students: studentReducer
});

const store = createStore(rootReducer, initialState);

// store.dispatch({
//   type: 'EDIT_TEACHER',
//   payload: {
//     name: "Wellybens"
//   }
// });

console.log(`

	New State
==============
	Name: ${JSON.stringify(initialState.teacher)}
`);

store.subscribe(() => {
  console.log("Store Updated!", store.getState());
});

store.dispatch({
  type: C.EDIT_TEACHER_NAME,
  payload: 'brian'
});

store.dispatch({
  type: LOGIN,
	payload: true
});
