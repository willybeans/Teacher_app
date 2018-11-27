import C from './constants';
import initialState from './initialState';

export function currentClickedStudent(student){

}

export function currentClickedAssignment(assignment){
  console.log('hiiiii');
  console.log(assignment);
  let mostRecent = {
    date: 0,
    _id: ''
  };
  for (let obj in assignment){
    if(Number(assignment[obj].date) > mostRecent.date){
      mostRecent = {
        date: Number(assignment[obj].date),
        _id: assignment[obj]._id
      }
    }
  }
  console.log(mostRecent);
  return {
    type: C.CURRENT_ASSIGNMENT,
    payload: mostRecent._id
  }
}


export default function reducer(state = initialState.currentClicked, action){
  switch(action.type){
  case C.CURRENT_STUDENT:
    return null;
  case C.CURRENT_ASSIGNMENT:
    return {
      ...state,
      assignment: action.payload
    }
  default:
    return state;
  }
}
