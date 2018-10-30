import React, { Component } from 'react';
import StudentProfile from './StudentProfile';
import StudentAssignments from './StudentAssignments';
import AddAssignment from './AddAssignment';

class StudentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: true,
      showAssignments: true,
      showAddAssignment: false,
      currentClickedAssignment: ''
    };
    this.handleOnClickBanner = this.handleOnClickBanner.bind(this);
    this.displayAssignmentOnClick = this.displayAssignmentOnClick.bind(this);
    this.handleEditStudent = this.handleEditStudent.bind(this);
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
    this.handlerender = this.handleRender.bind(this);
    this.showAddAssignment = this.showAddAssignment.bind(this);
    this.handleAddAssignment = this.handleAddAssignment.bind(this);
  }

  displayAssignmentOnClick(id){
    this.setState({
      currentClickedAssignment: id
    });
  }

  handleAddAssignment(assignment){
    this.props.addAssignment(assignment);
  }

  showAddAssignment(){
    let value1 = this.state.showAddAssignment ? false : true;
    let value2 = this.state.showing ? false : true;
    this.setState({
      showAddAssignment: value1,
      showing: value2
    });
  }

  handleEditStudent(student){
    this.props.editStudent(student);
  }

  handleDeleteStudent(student){
    this.props.deleteStudent(student);
  }

  handleOnClickBanner(event){
    event.preventDefault();
    let currentClick = event.currentTarget.innerText;
    let newState = this.state.showAssignments;

    switch(currentClick){
    case 'Assignments':
      if(newState === false){
        newState = true;
      }
      break;
    case 'Profile':
      if(newState === true){
        newState = false;
      }
      break;
    default:
      console.error('failed switch');
    }
    this.setState({
      showing: true,
      showAddAssignment: false,
      showAssignments: newState
    });
  }

  handleRender(){
    let currentClickedStudent;
    //this grabs the currently clicked student from the full list
    if(this.props.students) {
      let id = this.props.clickedStudent;
      currentClickedStudent = this.props.students.filter(student => {
        if(student._id === id){
          return student;
        }
      });
      currentClickedStudent = currentClickedStudent[0];
      //this grabs the assignments of clicked student
      if (this.props.assignments){
        let countMatch = 0;
        let currentAssignmentsLength = currentClickedStudent.assignments.length;
        if (currentAssignmentsLength > 0) {
          let stateAssignmentsLength = this.props.assignments.length;
          //compare current states assignments with students assignment id's
          for(let i = 0; i < currentAssignmentsLength; i++){
            for (let item of this.props.assignments){
              if(item._id === currentClickedStudent.assignments[i]){
                countMatch++;
              }
            }
          }
          if(countMatch != currentAssignmentsLength){
          this.props.getAssignments(this.props.clickedStudent);
          }
       }
      }
      return currentClickedStudent;
    }
  }

  render() {
    let currentClickedStudent = this.handleRender();

    let highlightClickedBanner = {
      background: "#CAEBF2"
    };

    return (
      <div>
        <div className="studentDisplayNav row">

          <div className="studentDisplayNavAssignments col-6"
            style={
              (this.state.showing) ? (this.state.showAssignments) ?
                highlightClickedBanner : null
                :
                null}>

            <div className="row">
              <div className="col-10 text-center">
                <a href="" onClick={this.handleOnClickBanner} > Assignments </a>
              </div>
              <button className="col-2 btn btn-secondary" onClick={this.showAddAssignment}> + </button>
            </div>
          </div>

          <div className="studentDisplayNavProfile col-6 text-center"
          style={
            (this.state.showing) ?
              (this.state.showAssignments) ?
                null : highlightClickedBanner
                :
                null}
              >

            <a href="" onClick={this.handleOnClickBanner}> Profile </a>
          </div>
        </div>

        <div className="studentDisplay">
          {
            this.state.showAddAssignment ?
              <AddAssignment
                showAddAssignment={this.showAddAssignment}
                addAssignment={this.handleAddAssignment}
               />
              : null
          }
          <div style={{display: (this.state.showing ? 'block' : 'none') }}>
            {
              this.state.showAssignments ?
                <StudentAssignments
                  assignments={this.props.assignments}
                  currentClickedAssignment={this.state.currentClickedAssignment}
                  displayAssignmentOnClick={this.displayAssignmentOnClick}
                />
                :
                <StudentProfile
                  editStudent={this.handleEditStudent}
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

      </div>
    );
  }
}

export default StudentDisplay;
