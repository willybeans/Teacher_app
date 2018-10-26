import C from './constants';
import initialState from './initialState';
const GET_ASSIGNMENTS = './api/assignment/GET_ASSIGNMENTS';
const ADD_ASSIGNMENT = './api/assignment/ADD_ASSIGNMENT';

export const getAssignments = (id) => {
  return dispatch => {
    return fetch('./api/assignment/' + id, {
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
  return dispatch => {
    return fetch('/api/assignment/', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
        studentId: assignment.studentId,
        title: assignment.title,
        composer: assignment.composer,
        music: assignment.music,
        recording: assignment.recording,
        notes: assignment.notes
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({
          type: ADD_ASSIGNMENT,
          payload: data.assignment
        });
      });
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
  case ADD_ASSIGNMENT:
    return [
      ...state,
      action.payload
    ];
    break;
  case C.EDIT_ASSIGNMENT:
    break;
  case C.DELETE_ASSIGNMENT:
    break;
  default:
    return state;
  }
}
