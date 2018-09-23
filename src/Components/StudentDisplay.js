import React, { Component } from 'react';
import StudentProfile from './StudentProfile';
import StudentAssignments from './StudentAssignments';

class StudentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAssignments: true
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event){
    event.preventDefault();
    let currentClick = event.currentTarget.textContent;
    let currentState = this.state.showAssignments;
    let newState;

    console.log("click: " + currentClick);
    console.log("state " + currentState);

    if((currentState === false) && (currentClick == 'Assignments')){
      this.setState({
        showAssignments: true
      });
    } else if (currentState === true && currentClick == 'Profile') {
      console.log('inside profile');
      this.setState({
        showAssignments: false
      });
    }
  }

  render() {
    //let student;
    let currentClickedStudent;
    let currentAssignments;

    if(this.props.students) {
      let id = this.props.clickedStudent;
      currentClickedStudent = this.props.students.filter(student => {
        if(student._id === id){
          return student;
        }
      });
      currentClickedStudent = currentClickedStudent[0];
    }

    if(this.props.assignments){
      let id = this.props.clickedStudent;
      // console.log('assignments: ' + JSON.stringify(this.props.assignments));
      // console.log('student: ' + JSON.stringify(currentClickedStudent));
      // console.log('assignments length ' + this.props.assignments.length);
      // console.log('assignments length ' + currentClickedStudent.assignments.length);

      //(let i = this.props.assignments.length; )
      //now check currentlClickedStudent.assignments ID's vs this.props.assignments id's
      //if there is any that dont match throw a thunk to capture the newest ones
      //does this pose a looping problem? only if there are artifacts of old assignments
    } else {
      //thunk new request for assignments.
      //this is identical to the thunk for if it exists.
    }

    return (
      <div>
        <div className="studentDisplayNav row text-center">
          <div className="studentDisplayNavAssignments col-6">
            <a href="" onClick={this.handleOnClick}> Assignments </a>
          </div>
          <div className="studentDisplayNavProfile col-6">
            <a href="" onClick={this.handleOnClick}> Profile </a>
          </div>
        </div>
        <div className="studentDisplay row">
          {
            this.state.showAssignments ?
              <StudentAssignments
                assignments={currentAssignments}/>
              :
              <StudentProfile
                name={currentClickedStudent.name}
                age={currentClickedStudent.age}
                email={currentClickedStudent.email}
                phone={currentClickedStudent.phone}
                goals={currentClickedStudent.goals}
              />
          }
        </div>
      </div>
    );
  }
}

export default StudentDisplay;
