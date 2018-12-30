import React, { Component } from 'react';

class AssignmentBody extends Component {

  handleDeleteAssignment(){
    this.props.deleteAssignment(this.props.currentClickedAssignment._id);
  }

  render() {
    if (!this.props.currentClickedAssignment){return ( <div> There seems to be no assignments </div> )}
    return (
      <div className="AssignmentBody container">

        <div className="row">
          <div className="col">
            Title: {this.props.currentClickedAssignment.title}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Composer:  {this.props.currentClickedAssignment.composer}
          </div>
        </div>
        <div className="row">
          <div className="col">
            recording:  {this.props.currentClickedAssignment.recording}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Sheet Music:  {this.props.currentClickedAssignment.sheet_music}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Notes:  {this.props.currentClickedAssignment.notes}
          </div>
        </div>

        <button className="btn btn-danger" onClick={this.handleDeleteAssignment.bind(this)}>Delete</button>

      </div>
    );
  }
}

export default AssignmentBody;
