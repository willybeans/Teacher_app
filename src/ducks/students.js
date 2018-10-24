import C from './constants';
import initialState from './initialState';
const ADD_STUDENT = '/api/student/ADD_STUDENT',
  DELETE_STUDENT = '/api/student/DELETE_STUDENT',
  EDIT_STUDENT = './api/student/EDIT_STUDENT';

export function addStudent(student){
  return dispatch => {
    return fetch('/api/student/', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
        teacherId: student.teacher,
        name: student.name,
        age: student.age,
        email: student.email,
        phone: student.phone,
        goals: student.goals
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: ADD_STUDENT,
          payload: data.students
        });
      });
  };

}

export function editStudent(student){
  return dispatch => {
    return fetch('/api/student/', {
      method: 'PUT',
      credentials: 'same-origin',
      body: JSON.stringify({
        name: student.name,
        email: student.email,
        age: student.age,
        phone: student.phone,
        goals: student.goals,
        studentId: student.studentId,
        teacherId: student.teacherId
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        let updatedStudent;
        data.students.forEach( item => {
          if(item._id === student.studentId) {
            updatedStudent = item;
          }
        });
        dispatch({
          type: EDIT_STUDENT,
          payload: updatedStudent
        });
      });
  };
}

export function loginStudents(students) {
  return dispatch => {
    dispatch({
      type: C.LOGIN_STUDENTS,
      payload: students
    });
  };
}

export function deleteStudent(student){
return dispatch => {
    return fetch('/api/student', {
      method: 'DELETE',
      credentials: 'same-origin',
      body: JSON.stringify({
        studentId: student.studentId,
        teacherId: student.teacherId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: DELETE_STUDENT,
          payload: data.students
        });
      })
  };
}

export default function reducer (state = initialState.students, action) {
  switch(action.type){
  case ADD_STUDENT:
    return [
      ...action.payload
    ]
    break;
  case C.LOGIN_STUDENTS:
    return [
      ...state,
      ...action.payload
    ]
    break;
  case EDIT_STUDENT:
    return state.map((item, index) =>{
      if(item._id === action.payload._id){
        return action.payload;
      }
      return item;
    })

    break;
  case DELETE_STUDENT:
    return [
      ...action.payload
    ]
    break;
  default:
    return state;
  }
}
