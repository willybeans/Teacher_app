import React, { Component } from 'react';

class StudentItem extends Component {
  render() {

    return (
      <li className="studentItem">
        {this.props.student}
      </li>
    );
  }
}

export default StudentItem;
