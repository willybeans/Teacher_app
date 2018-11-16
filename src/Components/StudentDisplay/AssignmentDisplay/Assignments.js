import React, { Component } from 'react';
import AssignmentItem from './AssignmentItem'

class Assignments extends Component {

  displayAssignmentOnClick(id){
    this.props.displayAssignmentOnClick(id);
  }

  render () {
    let assignmentItems;
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
    }

    return (
      <div className="">
        <h6>Date: </h6>
        {assignmentItems}
      </div>
    );
  }
}


export default Assignments;
