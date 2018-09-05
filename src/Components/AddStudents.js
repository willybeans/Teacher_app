import React, { Component } from 'react';

class AddStudents extends Component {
  render() {

    return (
      <div className='add_students'>
        <div className="form">
          <form onSubmit={this.props.handleSubmit}>

            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" id="student_name" name="name" />
            </div>

            <div className="form-group">
              <label>Age:</label>
              <input type="text" className="form-control" id='student_age' name="age" />
            </div>

            <div className="form-group">
              <label>Contact: </label>
              <input type="text" className="form-control" id="student_email" placeholder="Email" />
            </div>

            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddStudents;
