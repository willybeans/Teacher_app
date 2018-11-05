import C from './constants';
import initialState from './initialState';
const ADD_TEACHER = './api/teacher/ADD_TEACHER';
const EDIT_TEACHER = './api/teacher/EDIT_TEACHER'

export function addTeacher(teacher){
  return dispatch => {
    return fetch('./api/teacher/', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(teacher),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: ADD_TEACHER,
          payload: data.teacher
        });
        dispatch({
          type: C.LOGIN
        });
      });
  };
}

export function editTeacher(teacher){
  return dispatch => {
    return fetch('./api/teacher', {
      method: 'PUT',
      credentials: 'same-origin',
      body: JSON.stringify({
        teacherId: teacher.teacherId,
        name: teacher.name,
        email: teacher.email,
        instrument: teacher.instrument
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then( res=> res.json())
      .then(data => {
        //console.log(data);
        dispatch({
          type: EDIT_TEACHER,
          payload: null
        });
      });
  }
}

export function loginTeacher(teacher){
  return dispatch => {
    dispatch({
      type: ADD_TEACHER,
      payload: teacher
    });
  };
}

export default function reducer(state = initialState.teacher, action){
  switch(action.type){
  case ADD_TEACHER:
    return {
      ...state,
      id: action.payload._id,
      name: action.payload.name,
      instrument: action.payload.instrument,
      email: action.payload.email
    };
  case EDIT_TEACHER:
    return {
      ...state,
      teacher: {
        ...state.teacher,
        ...action.payload
      }
    };
  case C.DELETE_TEACHER:

    break;
  default:
    return state;
  }
};
