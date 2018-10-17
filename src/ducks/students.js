import C from './constants';
import initialState from './initialState';
const ADD_STUDENT = '/api/student/ADD_STUDENT';
const DELETE_STUDENT = '/api/student/DELETE_STUDENT';

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
  // return dispatch => {
  //   return fetch('/api/editStudent', {
  //     method: 'PUT',
  //     credentials: 'same-origin',
  //     body: JSON.stringify({
  //       name: student.name,
  //       email: student.email,
  //       age: student.age
  //     }),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("data: " + JSON.stringify(data));
  //       console.log("message:" + data.message);
  //       dispatch({
  //         type: C.EDIT_STUDENT,
  //         payload: data
  //       });
  //     });
  // };
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
  case C.EDIT_STUDENT:
    return null;
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
