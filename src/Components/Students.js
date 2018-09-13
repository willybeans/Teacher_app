import React, { Component } from 'react';
import StudentItem from './StudentItem'

class Students extends Component {
  render () {
    let studentItems;
    if(this.props.students) {
      studentItems = this.props.students.map(student => {
        return (
          <StudentItem key={student._id} student={student.name} />
        );
      });
    };

    return (
      <div className="">
        <h3>Students: </h3>
        {studentItems}
      </div>
    );
  }
}

export default Students;
