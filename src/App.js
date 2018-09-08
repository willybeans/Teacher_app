import React, { Component } from 'react';
import Students from './Components/Students';
import AddStudents from './Components/AddStudents';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_add_student: false
    };
    this.getStudents = this.getStudents.bind(this);
    this.handleShowAddStudent = this.handleShowAddStudent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleShowAddStudent() {
    if(this.state.show_add_student === false) {
      this.setState({show_add_student: true});
    } else {
      this.setState({show_add_student: false});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.handleShowAddStudent();
  }

  render() {

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
          <div className="student_view_left col col-4 text-center">

            <Students
              students={this.props.students}
            />
          </div>

          <div className="student_view_right col col-8">
            {
              this.state.show_add_student ?
                <AddStudents handleSubmit={this.handleSubmit} />
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
    assignments: state.assigments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (login) => {
      dispatch({
        type: 'LOGIN',
        payload: login
      });
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
