import React, { Component } from 'react';

class StudentItem extends Component {
  displayStudent(id){
    this.props.displayStudent(id);
  }
  render() {

    return (
      <div className="studentItem row text-center"
        onClick={this.displayStudent.bind(this, this.props.student._id)}>
        {this.props.student.name}
      </div>
    );
  }
}

export default StudentItem;
