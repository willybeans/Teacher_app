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
        dispatch(mostRecentAssignment(data.body.data));
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
  return dispatch => {
    return fetch('/api/assignment/', {
      method: 'DELETE',
      credentials: 'same-origin',
      body: JSON.stringify({
        assignment: assignment
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then( res => res.json())
      .then( data => {
        dispatch(getAssignments(data.student))
        //THIS IS THROWING AN ERROR:
        //ASSIGNMENTDISPLAY.JS ---
        //this.props.assignments.find is not a function
        // dispatch({
        //   type: DELETE_ASSIGNMENT
        // });
      })
  }
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
    return {...state}
    // return state.map( (item, index) => {
    //   if(item._id  !== action.payload._id){
    //     return item;
    //   }
    // })
    break;
  default:
    return state;
  }
}
