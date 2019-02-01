import React, { Component } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa'
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
    let currentClickedAssignment;

    if(this.props.assignments && this.props.currentClickedAssignment){
      currentClickedAssignment = this.props.assignments.find(item => {
        if(item._id === this.props.currentClickedAssignment){
          return item;
        }
      });
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
                { //hide this div if there are no assignments
                  (!currentClickedAssignment) ?
                    null
                    :
                    <div className="col text-right">
                      {
                        (this.state.showEditAssignment) ?
                          <button className="btn btn-dark" onClick={this.showEditAssignment}>< FaTimes /></button>
                          :
                          <button className="btn btn-info" onClick={this.showEditAssignment}>< FaEdit /></button>
                      }
                    </div>
                }
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
