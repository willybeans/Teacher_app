import React, { Component } from 'react';
import TeacherProfile from './Components/TeacherProfile';
import Students from './Components/StudentSearch/Students';
import StudentDisplay from './Components/StudentDisplay/StudentDisplay';
import AddStudents from './Components/AddStudents';
import LoginRegister from './Components/Login/LoginRegister';
import { connect } from 'react-redux';
import { addStudent, deleteStudent, editStudent } from './ducks/students';
import { addTeacher } from './ducks/teacher';
import { getAssignments, addAssignment } from './ducks/assignments';
import { loginUser } from './ducks/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_teacher: false,
      show_add_student: false,
      show_current_student: false,
      clickedStudent: ''
    };
    this.getStudents = this.getStudents.bind(this);
    this.handleShowAddStudent = this.handleShowAddStudent.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.displayStudentOnClick = this.displayStudentOnClick.bind(this);
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
    this.handleEditStudent = this.handleEditStudent.bind(this);
    this.handleAddAssignment = this.handleAddAssignment.bind(this);
    this.handleGetAssignments = this.handleGetAssignments.bind(this);
    this.handleShowTeacher = this.handleShowTeacher.bind(this);
  }

  getStudents(){
    //this is where the async DB request will go
    this.setState({
      students: [
        'jun yada',
        'willybeans',
        'brian blade',
        'chick corea',
        'brad mehldau'
      ]
    });
  }

  componentDidMount() {
    //this is where we will put async requests
    this.getStudents();
  }

  handleShowTeacher(){
    if(this.state.show_teacher === false){
      this.setState({
        show_teacher: true,
        show_add_student: false,
        show_current_student: false
      });
    } else {
      this.setState({ show_teacher: false });
    }

  }

  displayStudentOnClick(id){
    this.setState({
      show_teacher: false,
      show_add_student: false,
      show_current_student: true,
      clickedStudent: id
    });
    this.handleGetAssignments(id);
  }

  handleShowAddStudent() {
    if(this.state.show_add_student === false) {
      this.setState({
        show_teacher: false,
        show_current_student: false,
        show_add_student: true
      });
    } else {
      this.setState({show_add_student: false});
    }
  }

  handleGetAssignments(id){
    this.props.getAssignments(id);
  }

  handleAddAssignment(assignment){
    assignment.studentId = this.state.clickedStudent;
    this.props.addAssignment(assignment);
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
            <h1>TeacherAppTitle</h1>
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
            {
              this.state.show_teacher ?
              <TeacherProfile teacher={this.props.teacher} />
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
                  assignments={this.props.assignments}
                  deleteStudent={this.handleDeleteStudent}
                  editStudent={this.handleEditStudent}
                  addAssignment={this.handleAddAssignment}
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
    assignments: state.assignments
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
    getAssignments: (id) => {
      dispatch(getAssignments(id));
    },
    addAssignment: (assignment) => {
      dispatch(addAssignment(assignment));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
