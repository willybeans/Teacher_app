import React, { Component } from 'react';
import StudentProfile from './StudentProfile';
import AssignmentDisplay from './AssignmentDisplay/AssignmentDisplay';
import AddAssignment from './AssignmentDisplay/AddAssignment';

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
    this.handleRenderStudent = this.handleRenderStudent.bind(this);
    this.showAddAssignment = this.showAddAssignment.bind(this);
    this.handleAddAssignment = this.handleAddAssignment.bind(this);
    this.handleRenderRecentAssignment = this.handleRenderRecentAssignment.bind(this);
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
    let currentClick = event.currentTarget.innerText.toString();
    let newState = this.state.showAssignments;

    currentClick = currentClick.toString();

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

  handleRenderStudent(){
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
      return currentClickedStudent;
    }
  }

  handleRenderRecentAssignment(){
    if (this.state.currentClickedAssignment === '') {
      let grabMostRecentDate = {
        date: 0
      };
      if(this.props.assignments){
        this.props.assignments.forEach( item => {
          if(item.date > grabMostRecentDate.date) {
            grabMostRecentDate = item
          }
        });
        return grabMostRecentDate;
        // this.setState({
        //   currentClickedAssignment: grabMostRecentDate._id
        // });
      }
    }
  }


  render() {
    let currentClickedStudent = this.handleRenderStudent();
    //this.props.getAssignments(this.props.clickedStudent);
    let mostRecentAssignment = this.handleRenderRecentAssignment();
    // console.log('most recent');
    // console.log(mostRecentAssignment);
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
                <a href="" onClick={this.handleOnClickBanner}>Assignments</a>
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
                null
            }
          >

            <a href="" onClick={this.handleOnClickBanner}>Profile</a>
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
                <AssignmentDisplay
                  assignments={this.props.assignments}
                  mostRecentAssignment={mostRecentAssignment}
                  currentClickedAssignment={this.state.currentClickedAssignment}
                  displayAssignmentOnClick={this.displayAssignmentOnClick}
                />
                :
                <StudentProfile
                  editStudent={this.handleEditStudent}
                  deleteStudent={this.handleDeleteStudent}
                  current={currentClickedStudent}
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
