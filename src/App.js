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
        <div className="banner text-center"><h1> Teacher App </h1></div>
        <div className="wrapper row">

          <div className="student_view_left col col-4 text-center">
            <Students
              students={this.state.students}
            />
          </div>

          <div className="student_view_right col col-8">
          test
          </div>

        </div>
      </div>

    )
  }
}

export default App;
