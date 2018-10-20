import React, { Component } from 'react';

class ViewStudentProfile extends Component {

  render() {

    return (
      <div className="ViewStudentProfile">

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

      </div>
    );
  }
}

export default ViewStudentProfile;
