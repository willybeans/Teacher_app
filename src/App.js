import React, { Component } from 'react';
import TeacherDisplay from './Components/TeacherDisplay/TeacherDisplay';
import Students from './Components/StudentSearch/Students';
import StudentDisplay from './Components/StudentDisplay/StudentDisplay';
import AddStudents from './Components/AddStudents';
import LoginRegister from './Components/Login/LoginRegister';
import { connect } from 'react-redux';
import { addStudent, deleteStudent, editStudent } from './ducks/students';
import { addTeacher, editTeacher } from './ducks/teacher';
import { getAssignments, addAssignment, editAssignment, deleteAssignment } from './ducks/assignments';
import { loginUser } from './ducks/login';
import DailyQuotes from './Components/DailyQuotes';
import { currentClickedStudent, currentClickedAssignment } from './ducks/currentClicked.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_quote: true,
      show_teacher: false,
      show_add_student: false,
      show_current_student: false,
      clickedStudent: '',
      currentAssigment: ''
    };
    this.handleShowAddStudent = this.handleShowAddStudent.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.displayStudentOnClick = this.displayStudentOnClick.bind(this);
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
    this.handleEditStudent = this.handleEditStudent.bind(this);
    this.displayAssignmentOnClick = this.displayAssignmentOnClick.bind(this);
    this.handleAddAssignment = this.handleAddAssignment.bind(this);
    this.handleGetAssignments = this.handleGetAssignments.bind(this);
    this.handleEditAssignment = this.handleEditAssignment.bind(this);
    this.handleDeleteAssignment = this.handleDeleteAssignment.bind(this);
    this.handleShowTeacher = this.handleShowTeacher.bind(this);
    this.handleEditTeacher = this.handleEditTeacher.bind(this);
  }

  handleShowTeacher(){
    if(this.state.show_teacher === false){
      this.setState({
        show_quote:false,
        show_teacher: true,
        show_add_student: false,
        show_current_student: false
      });
    } else {
      this.setState({ show_teacher: false });
    }

  }

  displayStudentOnClick(id){
    this.handleGetAssignments(id);
    this.props.currentClickedStudent(id);
    this.setState({
      show_quote: false,
      show_teacher: false,
      show_add_student: false,
      show_current_student: true,
      clickedStudent: id
    });
  }

  displayAssignmentOnClick(id){
    console.log('app');
    console.log('dispayAssignmentonClick ' + id)
    this.props.currentClickedAssignment(id);
    this.setState({
      currentClickedAssignment: id
    });
  }

  handleShowAddStudent() {
    if(this.state.show_add_student === false) {
      this.setState({
        show_quote: false,
        show_teacher: false,
        show_current_student: false,
        show_add_student: true
      });
    } else {
      this.setState({show_add_student: false});
    }
  }

  handleEditTeacher(teacher){
    teacher.teacherId = this.props.teacher.id;
    this.props.editTeacher(teacher);
  }

  handleGetAssignments(id){
    this.props.getAssignments(id);
  }

  handleEditAssignment(assignment){
    this.props.editAssignment(assignment);
  }

  handleAddAssignment(assignment){
    assignment.studentId = this.state.clickedStudent;
    this.props.addAssignment(assignment);
  }

  handleDeleteAssignment(id){
    console.log('delete assignment');
    console.log(id);
    this.props.deleteAssignment(id);
  }

  handleAddStudent(student) {
    student.teacher = this.props.teacher.id;
    this.props.addStudent(student);
    this.handleShowAddStudent();
  }

  handleEditStudent(student){
    this.props.editStudent(student);
  }

  handleDeleteStudent(student){
    this.setState({
      show_current_student: false,
      clickedStudent: ''
    });
    this.props.deleteStudent(student);
  }

  render() {
    if (!this.props.login) {
      return <LoginRegister loginUser={this.props.loginUser} addTeacher={this.props.addTeacher} />
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="banner text-center col">
            <h1></h1>
          </div>
        </div>

        <div className="row">
          <div className="col text-left">
            <button className="btn btn-dark" onClick={this.handleShowTeacher}>Teacher Profile</button>
          </div>
          <div className="col text-right">
            <button className="btn btn-info" onClick={this.handleShowAddStudent}>Add Student</button>
          </div>
        </div>

        <div className="wrapper row">
          <div className="student_view_left col col-3 text-center">

            <Students
              students={this.props.students}
              displayStudentOnClick={this.displayStudentOnClick}
            />
          </div>

          <div className="student_view_right col col-9">

            {    (this.state.show_quote) ?
              <DailyQuotes />
              : null
            }
            {
              this.state.show_teacher ?
                <TeacherDisplay
                  teacher={this.props.teacher}
                  editTeacher={this.handleEditTeacher}
                />
                : null
            }
            {
              this.state.show_add_student ?
                <AddStudents addStudent={this.handleAddStudent} />
                : null
            }
            {
              this.state.show_current_student ?
                <StudentDisplay
                  teacher={this.props.teacher}
                  getAssignments={this.props.getAssignments}
                  students={this.props.students}
                  clickedStudent={this.state.clickedStudent}
                  currentClickedAssignment={this.props.currentClicked.assignment}
                  assignments={this.props.assignments}
                  displayAssignmentOnClick={this.displayAssignmentOnClick}
                  deleteStudent={this.handleDeleteStudent}
                  editStudent={this.handleEditStudent}
                  addAssignment={this.handleAddAssignment}
                  editAssignment={this.handleEditAssignment}
                  deleteAssignment={this.handleDeleteAssignment}
                />
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    teacher: state.teacher,
    login: state.login,
    students: state.students,
    assignments: state.assignments,
    currentClicked: state.currentClicked
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (login) => {
      dispatch(loginUser(login));
    },
    addStudent: (student) => {
      dispatch(addStudent(student));
    },
    deleteStudent: (student) => {
      dispatch(deleteStudent(student));
    },
    editStudent: (student) => {
      dispatch(editStudent(student));
    },
    addTeacher: (teacher) => {
      dispatch(addTeacher(teacher));
    },
    editTeacher: (teacher) => {
      dispatch(editTeacher(teacher));
    },
    getAssignments: (id) => {
      dispatch(getAssignments(id));
    },
    addAssignment: (assignment) => {
      dispatch(addAssignment(assignment));
    },
    editAssignment: (assignment) => {
      dispatch(editAssignment(assignment));
    },
    deleteAssignment: (assignment) => {
      dispatch(deleteAssignment(assignment));
    },
    currentClickedStudent: (student) => {
      dispatch(currentClickedStudent(student));
    },
    currentClickedAssignment: (assignment) => {
      dispatch(currentClickedAssignment(assignment));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
