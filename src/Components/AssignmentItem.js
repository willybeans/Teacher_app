import React, { Component } from 'react';

class AssignmentItem extends Component {
  displayAssignmentOnClick(id){
    //this.props.displayAssignmentOnClick(id);
  }
  render() {

    return (
      <div className="AssignmentItem row">
        {this.props.assignment.date}
      </div>
    );
  }
}

export default AssignmentItem;
