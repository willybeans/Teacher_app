import React, { Component } from 'react';
import AssignmentItem from './AssignmentItem';
import AssignmentBody from './AssignmentBody';
import EditAssignment from './EditAssignment';
import Assignments from './Assignments';

class StudentAssignments extends Component {
  constructor(props){
    super(props);
    this.state = {
      showEditAssignment: false
    };
    this.showEditAssignment = this.showEditAssignment.bind(this);
    this.displayAssignmentOnClick = this.displayAssignmentOnClick.bind(this);
    this.handleEditAssignment = this.handleEditAssignment.bind(this);
    this.handleDeleteAssignment = this.handleDeleteAssignment.bind(this);
  }

  displayAssignmentOnClick(id){
    this.props.displayAssignmentOnClick(id);
  }

  handleEditAssignment(assignment){
    this.props.editAssignment(assignment);
  }

  handleDeleteAssignment(id){
    this.props.deleteAssignment(id);
  }

  showEditAssignment(){
    let value = this.state.showEditAssignment ? false : true;
    this.setState({
      showEditAssignment: value
    });
  }

  render() {
    let assignmentItems;
    let currentClickedAssignment;
    let newestAssignmentDate = 0;

    let id;
    if(this.props.currentClickedAssignment != '') {
      id = this.props.currentClickedAssignment;
    } else {
      id = this.props.mostRecentAssignment._id
    }

    if(this.props.assignments){
      currentClickedAssignment = this.props.assignments.filter(item => {
        if(item._id === id){
          return item;
        }
      });

      currentClickedAssignment = currentClickedAssignment[0];
    }

    return (
      <div className="StudentAssignments">
        <div className="container">
          <div className="row">
            <div className="col col-3 assignment_search">
              <Assignments
                assignments={this.props.assignments}
                displayAssignmentOnClick={this.displayAssignmentOnClick}
              />
            </div>

            <div className="col col-9 text-center assignment_body">

              <div className="row">
                <div className="col text-right">
                  {
                    (this.state.showEditAssignment) ?
                      <button className="btn btn-dark" onClick={this.showEditAssignment}>X</button>
                      :
                      <button className="btn btn-info" onClick={this.showEditAssignment}>Edit Assignment</button>
                  }
                </div>
              </div>

              {
                this.state.showEditAssignment ?
                  <EditAssignment
                    currentClickedAssignment={currentClickedAssignment}
                    editAssignment={this.handleEditAssignment}
                    showEditAssignment={this.showEditAssignment}
                  />
                  :
                  <AssignmentBody
                    currentClickedAssignment={currentClickedAssignment}
                    deleteAssignment={this.handleDeleteAssignment}
                  />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentAssignments;
