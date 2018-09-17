import React, { Component } from 'react';

class StudentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      phone: '',
      goals: [],
      assignments: []
    };
  }

componentDidMount(){
    let id = this.props.student;
    let student = this.props.allStudents.filter(x => {
      if(x._id === id){
        return x;
      }
    });
    console.log("student0 " + Object.keys(student[0]));
    this.setState({
      id: id,
      name: student[0].name,
      email: student[0].email,
      phone: student[0].phone,
      goals: student[0].goals,
      assignments: student[0].assignments
    });
}

  render() {

    return (
      <div className="studentDisplay row">
        {this.props.student}
      </div>
    );
  }
}

export default StudentDisplay;
