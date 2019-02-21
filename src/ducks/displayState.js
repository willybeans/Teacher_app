import C from './constants';
import initialState from './initialState';

export function showTeacher(value, type){
  value = value ? false : true;
        dispatch({
          type: C.SHOW_TEACHER,
          payload: value
        });
};

export default function reducer (state = initialState.displayState, action) {
  switch(action.type){
  case C.SHOW_QUOTE:
    return {
      ...state, action.payload
    }
    break;
  case C.SHOW_TEACHER:
  return {
    ...state, action.payload
  }
    break;
  case C.SHOW_ADD_STUDENT:
    return {
      ...state, action.payload
    }
    break;
  case C.SHOW_CURRENT_STUDENT:
    return {
      ...state, action.payload
    }
    break;
  default:
    return state;
  }
}
