import React, { Component } from 'react';
import AssignmentItem from './AssignmentItem';

class StudentAssignments extends Component {

  render() {
    let assignmentItems;
    if(this.props.assignments){
      assignmentItems = this.props.assignments.map( item => {
        return(
          <AssignmentItem
            key={item._id}
            assignment={item}
          />
        );
      });
    }


    return (
      <div className="StudentAssignments">
        <div className="container">
          <div className="row">
            <div className="col col-6 assignment_search"> {assignmentItems} </div>
            <div className="col col-6 text-center assignment_body">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentAssignments;
