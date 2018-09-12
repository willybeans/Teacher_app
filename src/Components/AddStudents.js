import React, { Component } from 'react';

class AddStudents extends Component {
  constructor(){
    super();
    this.state={
      student:{
        name: '',
        age: '',
        email: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (propName) => (event) => {
    const {student} = this.state;
    const newStudent = {
      ...student,
      [propName]: event.target.value
    };
    this.setState({student: newStudent});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addStudent(this.state.student);
  }
  render() {

    return (
      <div className='add_students'>
        <div className="form">
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" id="student_name"
                onChange={this.handleChange('name')} value={this.state.student.name} />
            </div>

            <div className="form-group">
              <label>Age:</label>
              <input type="text" className="form-control" id='student_age'
                onChange={this.handleChange('age')} value={this.state.student.age} />
            </div>

            <div className="form-group">
              <label>Contact Email: </label>
              <input type="text" className="form-control" id="student_email" placeholder="Email"
                onChange={this.handleChange('email')} value={this.state.student.email}/>
            </div>

            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddStudents;
