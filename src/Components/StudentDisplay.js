import React, { Component } from 'react';

class StudentDisplay extends Component {
  render() {

    return (
      <div className="studentDisplay row">
        {this.props.student}
      </div>
    );
  }
}

export default StudentDisplay;
