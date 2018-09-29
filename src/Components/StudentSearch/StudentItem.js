import React, { Component } from 'react';

class StudentItem extends Component {
  displayStudentOnClick(id){
    this.props.displayStudentOnClick(id);
  }
  render() {

    return (
      <div className="studentItem row text-center"
        onClick={this.displayStudentOnClick.bind(this, this.props.student._id)}>
        {this.props.student.name}
      </div>
    );
  }
}

export default StudentItem;
