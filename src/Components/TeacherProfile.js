import React, { Component } from 'react';

class TeacherProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }



  render() {


    return (
      <div>

        <div className="row">
          <div className="col">
            Name: {this.props.teacher.name}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Email: {this.props.teacher.email}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Instrument: {this.props.teacher.instrument}
          </div>
        </div>

      </div>
    );
  }
}

export default TeacherProfile;
