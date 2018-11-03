import React, { Component } from 'react';

class TeacherProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {

    return (
      <div>

         <div>
          <div className="row">
            <div className="col">
              Name: {this.props.name}
            </div>
          </div>
          <div className="row">
            <div className="col">
              Email: {this.props.email}
            </div>
          </div>
          <div className="row">
            <div className="col">
              Instrument: {this.props.instrument}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TeacherProfile;
