import React, { Component } from 'react';

class Students extends Component {
  render () {


    return (
      <div className="">
        <h3>Students: </h3>
        {this.props.students}
      </div>
    );
  }
}

export default Students;
