import C from './constants';
import initialState from './initialState';
const ADD_STUDENT = "/api/addStudent";
//const DELETE_STUDENT = "/api/deleteStudent"

export function addStudent(student){
  //this needs to read the id's of the students and
  //set a new id 1 higher than the previous most high
  return dispatch => {
    return fetch('/api/addStudent', {
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
      .then(res => res.json())
      .then(data => {
        console.log("data: " + JSON.stringify(data));
        console.log("message:" + data.message);
        dispatch({
          type: ADD_STUDENT,
          payload: data
        });
      });
  };

}

export function editStudent(student){
  return dispatch => {
    return fetch('/api/addStudent', {
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
      .then(res => res.json())
      .then(data => {
        console.log("data: " + JSON.stringify(data));
        console.log("message:" + data.message);
        dispatch({
          type: C.EDIT_STUDENT,
          payload: data
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

// export function deleteStudent (student){
//   return dispatch => {
//     return fetch('/api/deleteStudent', {
//       method: 'DELETE',
//       credentials: 'same-origin',
//       body: JSON.stringify({
//         _id: '0'
//       }),
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log('delete data' + JSON.stringify(data));
//         console.log("message:" + data.message);
//         dispatch({
//           type: C.DELETE_STUDENT,
//           payload: data
//         });
//       })
//   };
// }

export function deleteStudent (student){
  return dispatch => {
    return fetch('/api/student/delete', {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('delete data' + JSON.stringify(data));
        console.log("message:" + data.message);
        dispatch({
          type: C.DELETE_STUDENT,
          payload: data
        });
      })
  };
}

export default function reducer (state = initialState.students, action) {
  console.log('reducer in login payload: ' + action.payload);

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
  case C.DELETE_STUDENT:
    return action.payload;
    break;
  default:
    return state;
  }
}
