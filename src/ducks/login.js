import C from './constants';
import initialState from './initialState';

export function login(login){
  return dispatch => {
    return fetch('/api/login', {
      method: 'GET',
      credentials: 'same-origin',
      body: JSON.stringify({
        email: login.email,
        password: login.password
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: C.LOGIN,
          payload: data
        });
      });
  };
}

export default function reducer(state = initialState.login, action){
  switch(action.type){
  case C.LOGIN:
    if (state.login === false) {
      return {...state,
        login: true
      }
    } else {
      return {
        ...state,
        login: false
      };
    }

  default:
    return state;
  }
}
