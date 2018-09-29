import React, { Component } from 'react';
import AssignmentItem from './AssignmentItem';
import AssignmentBody from './ASsignmentBody';

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
      currentClickedAssignment = this.props.assignments.map(item => {
        if(item._id === id){
          return (
            <AssignmentBody
              key={item._id}
              student={item.student}
              id={item._id}
              title={item.title}
              composer={item.composer}
              recording={item.recording}
              sheetMusic={item.sheet_music}
              notes={item.notes}
            />
          );
        }
      });
    }
    return (
      <div className="StudentAssignments">
        <div className="container">
          <div className="row">
            <div className="col col-3 assignment_search"> {assignmentItems} </div>
            <div className="col col-9 text-center assignment_body"> {currentClickedAssignment}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentAssignments;
