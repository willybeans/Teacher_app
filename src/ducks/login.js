import C from './constants';
import initialState from './initialState';

export function login(login){
  return {
    type: C.LOGIN,
    login: login
  };
}

export function loginReducer(state = initialState, action){
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
