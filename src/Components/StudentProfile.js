import React, { Component } from 'react';

class StudentProfile extends Component {

  render() {

    return (
      <div className="StudentProfile row text-center">
        <div className="row">
        Name: {this.props.name}
        </div>
        <div className="row">
        Age:  {this.props.age}
        </div>
        <div className="row">
        Email:  {this.props.email}
        </div>
        <div className="row">
        Phone:  {this.props.phone}
        </div>
        <div className="row">
        Goals:  {this.props.goals}
        </div>

      </div>
    );
  }
}

export default StudentProfile;
