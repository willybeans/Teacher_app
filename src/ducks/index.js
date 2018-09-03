import { createStore, combineReducers } from 'redux';
import C from './constants';
import initialState from './initialState.json';

let state = initialState;

console.log(`

	Initial state
	=============
	teacher: ${state.teachers[0].name}
	students: ${JSON.stringify(state.teachers[0].students)}
	loggedin: ${state.login}
	chick: ${state.teachers[0].students[0]}
  Brad Mehldau: ${JSON.stringify(state.teachers[0].students[1].assignments[1])}
  teacher keys: ${Object.keys(state.teachers[0])}

`);

const addTeacher = (teacher) => {
  return {
    type: C.ADD_TEACHER,
    payload: teacher
  };
};

const editTeacher = (teacher) => {
  return {
    type: C.EDIT_TEACHER,
    payload: teacher
  };
};

const deleteTeacher = (teacher) => {
  return {
    type: C.DELETE_TEACHER,
    payload: teacher
  };
};

const teacherReducer = (state = initialState, action) => {
  switch(action.type){
  case C.ADD_TEACHER:
    break;
  case C.EDIT_TEACHER:
    break;
  case C.DELETE_TEACHER:
    break;
  default:
    return state;
  }
};

const addStudent = (student) => {
  return {
    type: C.ADD_STUDENT,
    payload: student
  };
};

const editStudent = (student) => {
  return {
    type: C.EDIT_STUDENT,
    payload: student
  };
};

const deleteStudent = (student) => {
  return {
    type: C.DELETE_STUDENT,
    payload: student
  };
};

const studentReducer = (state = initialState, action) => {
  switch(action.type){
  case C.ADD_STUDENT:
    break;
  case C.EDIT_STUDENT:
    break;
  case C.DELETE_STUDENT:
    break;
  default:
    return state;
  }
};

const login = (login) => {
  return {
    type: C.LOGIN,
    payload: login
  };
};

const logout = (logout) => {
  return {
    type: C.LOGIN,
    payload: logout
  };
};

const loginReducer = (state = initialState, action) => {
  switch(action.type){
  case C.LOGIN:
    break;
  case C.LOGOUT:
    break;
  default:
    return state;
  }
};

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
  teachers: teacherReducer,
  assignments: assignmentReducer,
  students: studentReducer
});

const store = createStore(rootReducer, state)
