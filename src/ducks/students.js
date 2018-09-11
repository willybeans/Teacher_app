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
  return {
    type: C.EDIT_STUDENT,
    payload: student
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
      method: 'GET',
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
  switch(action.type){
  case ADD_STUDENT:
  //this needs to do two things:
  //1) grab the current teachers id number
  //2) grab the last students id number
  //perhaps this would happen in the action?
  // let checkKeys = Object.keys(initialState.students);
  // var newID = Number(checkKeys.length);
  console.log("payload in reducer: " + JSON.stringify(action.payload.data.name));
  console.log("payload in reducer: " + JSON.stringify(action.payload.data.email));
  console.log("payload in reducer: " + JSON.stringify(action.payload.data.age));
  console.log("payload in reducer: " + JSON.stringify(action.payload.data));
    const newStudent = {
      name: action.payload.data.name,
      email: action.payload.data.email,
      age: action.payload.data.age
      };
    return {
      ...state,
      students: [
        ...state.students,
        action.payload.data
      ]
    }
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
