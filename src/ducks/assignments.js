import C from './constants';
import initialState from './initialState';
const GET_ASSIGNMENTS = './api/assignment/';

export const getAssignments = (id) => {
  return dispatch => {
    return fetch(GET_ASSIGNMENTS + id, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: GET_ASSIGNMENTS,
          payload: data.body.data
        });
      });
  }
}

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
  case GET_ASSIGNMENTS:
    return [
      ...action.payload
    ]
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
