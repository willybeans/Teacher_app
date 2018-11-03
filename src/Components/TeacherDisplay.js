import React, { Component } from 'react';
import TeacherProfile from './TeacherProfile';
import EditTeacher from './EditTeacher';

class TeacherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewEditTeacher: false
    };
    this.showEditTeacher = this.showEditTeacher.bind(this);
  }

  showEditTeacher(){
    let value = this.state.viewEditTeacher ? false : true;
    this.setState({
      viewEditTeacher: value
    });
  }


  render() {


    return (
      <div>
        <div className="row text-right">
          {
            (this.state.viewEditTeacher) ?
              <button className="btn btn-dark" onClick={this.showEditTeacher}>X</button>
              :
              <button className="btn btn-info" onClick={this.showEditTeacher}>Edit Teacher</button>
          }
        </div>

        {
          (this.state.viewEditTeacher) ?
            <EditTeacher
            name={this.props.teacher.name}
            email={this.props.teacher.email}
            instrument={this.props.teacher.instrument}
            />
            :
            <TeacherProfile
              name={this.props.teacher.name}
              email={this.props.teacher.email}
              instrument={this.props.teacher.instrument}
            />
        }

      </div>
    );
  }
}

export default TeacherDisplay;
