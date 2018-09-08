import C from './constants';
import initialState from './initialState';

export const addAssignment = (assignment) => {
  return {
    type: C.ADD_ASSIGNMENT,
    payload: assignment
  };
};

export const editAssignment = (assignment) => {
  return {
    type: C.EDIT_ASSIGNMENT,
    payload: assignment
  };
};

export const deleteAssignment = (assignment) => {
  return {
    type: C.DELETE_ASSIGNMENT,
    payload: assignment
  };
};

export default function reducer(state = initialState.assignments, action){
  switch(action.type){
  case C.ADD_ASSIGNMENT:
    return {
      ...state,
      assignments: {
        ...state.assignments,
        [action.payload.assignmentID]: action.payload
      }
    };
    break;
  case C.EDIT_ASSIGNMENT:
    break;
  case C.DELETE_ASSIGNMENT:
    break;
  default:
    return state;
  }
}
