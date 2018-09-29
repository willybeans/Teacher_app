import React, { Component } from 'react';

class AssignmentItem extends Component {
  displayAssignmentOnClick(id){
    this.props.displayAssignmentOnClick(id);
  }
  render() {

    return (
      <div className="AssignmentItem row"
      onClick={this.displayAssignmentOnClick.bind(this, this.props.assignment._id)}>
        {this.props.assignment.date}
      </div>
    );
  }
}

export default AssignmentItem;
