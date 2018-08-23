import React, { Component } from 'react';
import Students from './Components/Students';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [''],
    };
    this.getStudents = this.getStudents.bind(this);
  }

  getStudents(){
    //this is where the async DB request will go
    this.setState({
      students: [
        'jun yada',
        'willybeans',
        'brian blade',
        'chick corea',
        'brad mehldau'
      ]
    });
  }

  componentDidMount() {
    //this is where we will put async requests
    this.getStudents();
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="banner"><h1> Teacher App </h1></div>
        <Students
          students={this.state.students}
         />
      </div>

    )
  }
}

export default App;
