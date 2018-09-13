import C from './constants';
import initialState from './initialState';
const LOGIN = './api/login/';
import { loginTeacher } from './teacher';
import { loginStudents } from './students';

export function loginUser(login){
  let loginEmail = LOGIN + login.email;
  return dispatch => {
    return fetch(LOGIN + encodeURIComponent(login.email), {
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
          type: LOGIN,
          payload: data.message
        });
        dispatch(loginTeacher(data.body));
        dispatch(loginStudents(data.body.students));
      });
  };
}

export default function reducer(state = initialState.login, action){
  const message = action.payload;
  switch(action.type){
  case LOGIN:
    if (state === false && message === 'login fired') {
      return true;
    } else {
      return false;
    }
  default:
    return state;
  }
}
