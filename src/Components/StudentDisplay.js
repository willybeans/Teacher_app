import React, { Component } from 'react';

class StudentDisplay extends Component {

  displayStudent(id){
    let student = this.props.students.filter(x => {
      if(x._id === id){
        return x;
      }
    });
    console.log("student0 " + Object.keys(student[0]));
    this.setState({
      studentDisplay: student[0]
    });
  }
  
  render() {

    return (
      <div className="studentDisplay row">
        {this.props.student}
      </div>
    );
  }
}

export default StudentDisplay;
