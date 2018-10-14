import C from './constants';
import initialState from './initialState';
const ADD_STUDENT = '/api/student/ADD_STUDENT';
const DELETE_STUDENT = '/api/student/DELETE_STUDENT';

export function addStudent(student){
  //this needs to read the id's of the students and
  //set a new id 1 higher than the previous most high
  return dispatch => {
    return fetch('/api/student/', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({
        name: student.name,
        email: student.email,
        age: student.age
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        return JSON.stringify(res)
      })
      .then(data => {
        console.log("message:" + data);
        console.log("data: " + JSON.stringify(data));
        // dispatch({
        //   type: ADD_STUDENT,
        //   payload: data
        // });
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
export function test(test){
  console.log(test);
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
  console.log('studentDisplay: ' + JSON.stringify(student));
  console.log('teach ' + student.teacherId);
  console.log('stu ' + student.studentId);
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
      .then(res => {
        console.log('res' + Object.keys(res));
        console.log('ressdfasd' + JSON.stringify(res));
        res.json()
      })
      .then(data => {
        console.log('delete data' + JSON.stringify(data));
        console.log("student:" + data);
        dispatch({
          type: DELETE_STUDENT,
          payload: data
        });
      })
  };
}

export default function reducer (state = initialState.students, action) {
  switch(action.type){
  case ADD_STUDENT:
    return {
      ...state,
      students: [
        ...state.students,
        action.payload.data
      ]
    }
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
  console.log('actionpayload' + action.payload);
    return [
      ...state,
      ...action.payload
    ]
    break;
  default:
    return state;
  }
}
