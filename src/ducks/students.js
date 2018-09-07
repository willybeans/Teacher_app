import C from './constants';
import initialState from './initialState';

export function addStudent(student){
  return {
    type: C.ADD_STUDENT,
    payload: student
  };
}

export function editStudent(student){
  return {
    type: C.EDIT_STUDENT,
    payload: student
  };
}

export function deleteStudent (student){
  return {
    type: C.DELETE_STUDENT,
    payload: student
  };
}

export default function reducer (state = initialState.students, action) {
  switch(action.type){
  case C.ADD_STUDENT:
  //this needs to do two things:
  //1) grab the current teachers id number
  //2) grab the last students id number
  //perhaps this would happen in the action?
  // let checkKeys = Object.keys(initialState.students);
  // var newID = Number(checkKeys.length);
    return {
      ...state,
      students: {
        ...state.students,
        [action.payload.studentID]: action.payload
      }
    }
    break;
  case C.EDIT_STUDENT:
    break;
  case C.DELETE_STUDENT:
    break;
  default:
    return state;
  }
}
