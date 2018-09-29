import React, { Component } from 'react';
import StudentProfile from './StudentProfile';
import StudentAssignments from './StudentAssignments';

class StudentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAssignments: true,
      currentClickedAssignment: ''
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.displayAssignmentOnClick = this.displayAssignmentOnClick.bind(this);
  }

  // componentDidMount() {
  //   let id = this.props.clickedStudent;
  //   this.props.getAssignments(id);
  // }

  displayAssignmentOnClick(id){
    console.log(id);
    this.setState({
      currentClickedAssignment: id
    });
  }

  handleOnClick(event){
    event.preventDefault();
    let currentClick = event.currentTarget.innerText;
    let currentState = this.state.showAssignments;
    let newState = currentState;

    switch(currentClick){
    case 'Assignments':
      if(currentState === false){
        newState = true;
      }
      break;
    case 'Profile':
      if(currentState === true){
        newState = false;
      }
      break;
    default:
      console.log('failed switch');
    }
    this.setState({ showAssignments: newState });
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

      if (this.props.assignments){
        let countMatch = 0;
        let currentAssignmentsLength = currentClickedStudent.assignments.length;
        let stateAssignmentsLength = this.props.assignments.length;
        //compare current states assignments with students assignment id's
        for(let i = 0; i < currentAssignmentsLength; i++){
          for (let item of this.props.assignments){
            if(item._id === currentClickedStudent.assignments[i]){
              countMatch++;
              break;
            }
          }
        }
        //when assignments dont match, fire a thunk to retreive them
        if(countMatch != currentAssignmentsLength){
          this.props.getAssignments(this.props.clickedStudent);
        }
      }
    }

    return (
      <div>
        <div className="studentDisplayNav row text-center">
          <div className="studentDisplayNavAssignments col-6">
            <a href="" onClick={this.handleOnClick} > Assignments </a>
          </div>
          <div className="studentDisplayNavProfile col-6">
            <a href="" onClick={this.handleOnClick}> Profile </a>
          </div>
        </div>
        <div className="studentDisplay row">
          {
            this.state.showAssignments ?
              <StudentAssignments
                assignments={this.props.assignments}
                currentClickedAssignment={this.state.currentClickedAssignment}
                displayAssignmentOnClick={this.displayAssignmentOnClick}
              />
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
