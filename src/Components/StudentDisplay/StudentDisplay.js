import React, { Component } from 'react';
import StudentProfile from './StudentProfile';
import StudentAssignments from './StudentAssignments';

class StudentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAssignments: false,
      currentClickedAssignment: ''
    };
    this.handleOnClickBanner = this.handleOnClickBanner.bind(this);
    this.displayAssignmentOnClick = this.displayAssignmentOnClick.bind(this);
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props.teacher);
  // }

  displayAssignmentOnClick(id){
    console.log(id);
    this.setState({
      currentClickedAssignment: id
    });
  }

  handleAddAssignment(){
    console.log('add assignment');
  }

  handleDeleteStudent(student){
    console.log('studentDisplay: ' + JSON.stringify(student));
    this.props.deleteStudent(student);
  }

  handleOnClickBanner(event){
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
        <div className="studentDisplayNav row">
          <div className="studentDisplayNavAssignments col-6">
            <div className="row">
              <div className="col-10 text-center"> <a href="" onClick={this.handleOnClickBanner} > Assignments </a> </div>
              <button className="col-2 btn btn-secondary" onClick={this.handleAddAssignment}> + </button>
            </div>
          </div>
          <div className="studentDisplayNavProfile col-6 text-center">
            <a href="" onClick={this.handleOnClickBanner}> Profile </a>
          </div>
        </div>

        <div className="studentDisplay">
          {
            this.state.showAssignments ?
              <StudentAssignments
                assignments={this.props.assignments}
                currentClickedAssignment={this.state.currentClickedAssignment}
                displayAssignmentOnClick={this.displayAssignmentOnClick}
              />
              :
              <StudentProfile
                deleteStudent={this.handleDeleteStudent}
                teacherId={this.props.teacher.id}
                studentId={currentClickedStudent._id}
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
