import React, { Component } from 'react';

class StudentProfile extends Component {

  componentDidMount(){

  }

  handleDeleteStudent(){
    let student = {
      teacherId: this.props.teacherId,
      studentId: this.props.studentId
    }
    this.props.deleteStudent(student);
  }

  handleEditStudent(){
    console.log('edit student');
  }

  render() {

    return (
      <div className="StudentProfile">

        <div className="row text-right">
          <div className='col'>
            <button className="btn btn-info" onClick={this.handleEditStudent}>Edit Student</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            Name: {this.props.name}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Age:  {this.props.age}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Email:  {this.props.email}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Phone:  {this.props.phone}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Goals:  {this.props.goals}
          </div>
        </div>

        <div className="row text-right">
          <div className='col'>
            <button className="btn btn-danger" onClick={this.handleDeleteStudent.bind(this)}>Delete Student</button>
          </div>
        </div>

      </div>
    );
  }
}

export default StudentProfile;
