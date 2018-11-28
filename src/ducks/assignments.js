import C from './constants';
import initialState from './initialState';
import {mostRecentAssignment} from './currentClicked'
const GET_ASSIGNMENTS = './api/assignment/GET_ASSIGNMENTS';
const ADD_ASSIGNMENT = './api/assignment/ADD_ASSIGNMENT';
const EDIT_ASSIGNMENT = './api/assignment/EDIT_ASSIGNMENT';
const DELETE_ASSIGNMENT = './api/assignment/DELETE_ASSIGNMENT';

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
        console.log('should fire other action');
        dispatch(mostRecentAssignment(data.body.data));
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
        dispatch({
          type: ADD_ASSIGNMENT,
          payload: data.assignment
        });
      });
  };
};

export const editAssignment = (assignment) => {
  return dispatch => {
    return fetch('/api/assignment/', {
      method: 'PUT',
      credentials: 'same-origin',
      body: JSON.stringify({
        assignment: assignment
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch ({
          type: EDIT_ASSIGNMENT,
          payload: data
        });
      })
  };

};

export const deleteAssignment = (assignment) => {
  console.log('duck delete');
  console.log(assignment);
  // return dispatch => {
  //   return fetch('/api/assignment/', {
  //     method: 'PUT',
  //     credentials: 'same-origin',
  //     body: JSON.stringify({}),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   });
  // }
  return {
    type: DELETE_ASSIGNMENT,
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
  case EDIT_ASSIGNMENT:
    return state.map((item, index) => {
      if(item._id === action.payload._id){
        return action.payload;
      }
      return item;
    });
    break;
  case DELETE_ASSIGNMENT:
    return [
      ...state
    ]
    break;
  default:
    return state;
  }
}
