import React, { Component } from 'react';

class EditStudentProfile extends Component {
  constructor(){
    super();
    this.state={
      student:{
        teacherId: '',
        studentId: '',
        name: '',
        age: '',
        email: '',
        phone: '',
        goals: [],
      }
    }
  //  this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({
      student:{
        teacherId: this.props.teacherId,
        studentId: this.props.studentId,
        name: this.props.name,
        age: this.props.age,
        email: this.props.email,
        phone: this.props.phone,
        goals: this.props.goals
      }
    });
  }

  handleChange = (propName) => (event) => {
    const {student} = this.state;
    const newStudent = {
      ...student,
      [propName]: event.target.value
    };
    this.setState({student: newStudent});
  }
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.handleEditStudent(this.state.student);
  // }
  render() {

    return (
      <div className='edit_students'>
        <div className="form">
          <form onSubmit={(e) => {e.preventDefault(); this.props.handleEditStudent(this.state.student);} }>

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
              <label>Email: </label>
              <input type="text" className="form-control" id="student_email" placeholder="Email"
                onChange={this.handleChange('email')} value={this.state.student.email}/>
            </div>

            <div className="form-group">
              <label>Phone: </label>
              <input type="text" className="form-control" id="student_phone" placeholder="Phone"
                onChange={this.handleChange('phone')} value={this.state.student.phone}/>
            </div>

            <div className="form-group">
              <label>Goals: </label>
              <input type="text" className="form-control" id="student_email" placeholder="Goals"
                onChange={this.handleChange('goals')} value={this.state.student.goals}/>
            </div>

            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default EditStudentProfile;
