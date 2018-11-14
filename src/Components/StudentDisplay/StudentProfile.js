import React, { Component } from 'react';
import EditStudentProfile from './EditStudentProfile';
import ViewStudentProfile from './ViewStudentProfile';



class StudentProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewEditStudent: false,
      modalOpened: false
    }
    this.showEditStudent = this.showEditStudent.bind(this);
    this.handleEditStudent = this.handleEditStudent.bind(this);
  };

  handleDeleteStudent(){
    let student = {
      teacherId: this.props.teacherId,
      studentId: this.props.studentId
    }
    this.props.deleteStudent(student);
  }

  handleEditStudent(student){
    this.props.editStudent(student);
    this.showEditStudent();
  }

  showEditStudent(){
    let value = this.state.viewEditStudent ? false : true;
    this.setState({
      viewEditStudent: value
    });
  }

  render() {

    return (
      <div className="StudentProfile">

        <div className="row text-right">
          <div className='col'>
            {
              (this.state.viewEditStudent) ?
                <button className="btn btn-dark" onClick={this.showEditStudent}>X</button>
                :
                <button className="btn btn-info" onClick={this.showEditStudent}>Edit Student</button>
            }
          </div>
        </div>
        {
          (this.state.viewEditStudent) ?
            <EditStudentProfile
              teacherId={this.props.teacherId}
              studentId={this.props.studentId}
              name={this.props.name}
              age={this.props.age}
              email={this.props.email}
              phone={this.props.phone}
              goals={this.props.goals}
              editStudent={this.handleEditStudent}
            />
            :
            <ViewStudentProfile
              teacherId={this.props.teacherId}
              studentId={this.props.studentId}
              name={this.props.name}
              age={this.props.age}
              email={this.props.email}
              phone={this.props.phone}
              goals={this.props.goals}
            />
        }

        <div className="row text-right">
          <div className='col'>
            {
              (this.state.viewEditStudent) ?
                null
                :
                <button className="btn btn-danger" onClick={this.handleDeleteStudent.bind(this)}>Delete Student</button>
            }
          </div>
        </div>

      </div>
    );
  }
}

export default StudentProfile;
