import React, { Component } from 'react';
import StudentProfile from './StudentProfile';
import StudentAssignments from './StudentAssignments';

class StudentDisplay extends Component {

componentDidUpdate(){
    // let currentStudentIndex = this.props.student;
    // let index = this.props.allStudents.findIndex( x => {
    //   if(x._id === id){
    //     return x;
    //   }
    // });
    // console.log(index);
    // console.log(this.props.allStudents[index]);
    // // let student = this.props.allStudents.filter(x => {
    // //   if(x._id === id){
    // //     return x;
    // //   }
    // // });
    //
    // // this.setState({
    // //   id: id,
    // //   name: student[0].name,
    // //   email: student[0].email,
    // //   phone: student[0].phone,
    // //   goals: student[0].goals,
    // //   assignments: student[0].assignments
    // // });
}


  render() {
    //let student;
    let currentClickedStudent;
    if(this.props.students) {
      let id = this.props.clickedStudent;
      currentClickedStudent= this.props.students.filter(student => {
        if(student._id === id){
          return student;
        }
      });
      currentClickedStudent = currentClickedStudent[0];
    }

    return (
      <div className="studentDisplay row">
        <StudentProfile
          name={currentClickedStudent.name}
          age={currentClickedStudent.age}
          email={currentClickedStudent.email}
          phone={currentClickedStudent.phone}
          goals={currentClickedStudent.goals}
        />
        <StudentAssignments

        />
      </div>
    );
  }
}

export default StudentDisplay;
