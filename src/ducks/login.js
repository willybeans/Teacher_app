import C from './constants';
import initialState from './initialState';

export function login(login){
  return {
    type: C.LOGIN,
    login: login
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
