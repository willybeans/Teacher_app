import React, { Component } from 'react';

class StudentAssignments extends Component {

  render() {

    return (
      <div className="StudentAssignments row text-center">
      {this.props.assignments}
      </div>
    );
  }
}

export default StudentAssignments;
