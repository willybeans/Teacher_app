import React, { Component } from 'react';

class AssignmentItem extends Component {
  displayAssignmentOnClick(id){
    this.props.displayAssignmentOnClick(id);
  }
  render() {
    //translate javascript time:
    let dateObj = this.props.assignment.date;
    dateObj = dateObj.substring(0, dateObj.length - 3);

    let currentDate = new Date(dateObj * 1000);

    let day = currentDate.getDate(),
      mo = currentDate.getMonth() + 1,
      year = currentDate.getFullYear().toString().substring(2,4),
      finalDate = mo + '/' + day + '/' + year;

    return (
      <div className="AssignmentItem row"
        onClick={this.displayAssignmentOnClick.bind(this, this.props.assignment._id)}>
        {finalDate}
      </div>
    );
  }
}

export default AssignmentItem;
