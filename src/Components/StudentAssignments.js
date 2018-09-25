import React, { Component } from 'react';
import AssignmentItem from './AssignmentItem';

class StudentAssignments extends Component {
  displayAssignmentOnClick(id){
    this.props.displayAssignmentOnClick(id);
  }

  render() {
    let assignmentItems;
    let currentClickedAssignment;

    if(this.props.assignments){
      assignmentItems = this.props.assignments.map( item => {
        return(
          <AssignmentItem
            key={item._id}
            assignment={item}
            displayAssignmentOnClick={this.displayAssignmentOnClick.bind(this)}
          />
        );
      });

      let id = this.props.currentClickedAssignment;
      currentClickedAssignment = this.props.assignments.filter(item => {
        if(item._id === id){
          return item;
        }
      });
      currentClickedAssignment = currentClickedAssignment[0];
      console.log(currentClickedAssignment);
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
