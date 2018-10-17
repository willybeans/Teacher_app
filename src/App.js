import React, { Component } from 'react';
import Students from './Components/StudentSearch/Students';
import StudentDisplay from './Components/StudentDisplay/StudentDisplay';
import AddStudents from './Components/AddStudents';
import LoginRegister from './Components/Login/LoginRegister';
import { connect } from 'react-redux';
import { addStudent, deleteStudent } from './ducks/students';
import { addTeacher } from './ducks/teacher';
import { getAssignments } from './ducks/assignments';
import { loginUser } from './ducks/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  displayStudentOnClick(id){
    this.setState({
      show_add_student: false,
      show_current_student: true,
      clickedStudent: id
    });
  }

  handleShowAddStudent() {
    if(this.state.show_add_student === false) {
      this.setState({
        show_current_student: false,
        show_add_student: true
      });
    } else {
      this.setState({show_add_student: false});
    }
  }

  handleAddStudent(student) {
    student.teacher = this.props.teacher.id;
    this.props.addStudent(student);
    this.handleShowAddStudent();
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
    addTeacher: (teacher) => {
      dispatch(addTeacher(teacher));
    },
    getAssignments: (id) => {
      dispatch(getAssignments(id));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
