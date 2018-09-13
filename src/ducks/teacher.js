import C from './constants';
import initialState from './initialState';
const ADD_TEACHER = './api/teacher/';

export function editTeacherId(teacherId){
  return {
    type: C.EDIT_TEACHER_ID,
    payload: teacherId
  };
}

export function editTeacherEmail(teacherEmail){
  return {
    type: C.EDIT_TEACHER_EMAIL,
    payload: teacherEmail
  };
}

export function editTeacherName(teacherName){
  return {
    type: C.EDIT_TEACHER_NAME,
    payload: teacherName
  };
}

export function addTeacher(teacher){
  return dispatch => {
    return fetch(ADD_TEACHER, {
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
  case C.EDIT_TEACHER_NAME:
    return {
      ...state,
      teacher: {
        ...state.teacher,
        name: action.payload
      }
    };
  case C.EDIT_TEACHER_EMAIL:
    return {
      ...state,
      teacher: {
        ...state.teacher,
        email: action.payload
      }
    };
  case C.EDIT_TEACHER_ID:
    return {
      ...state,
      teacher: {
        ...state.teacher,
        id: action.payload
      }
    };
  case C.DELETE_TEACHER:
  //this doesnt neccesarily need to delete state
  //but there needs to be a function to delete from DB
  //would that go here or somewhere else?
    break;
  default:
    return state;
  }
};
