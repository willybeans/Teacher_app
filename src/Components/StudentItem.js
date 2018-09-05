import React, { Component } from 'react';

class StudentItem extends Component {
  render() {

    return (
      <div className="studentItem row text-center">
        {this.props.student}
      </div>
    );
  }
}

export default StudentItem;
