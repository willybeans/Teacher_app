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
    this.handleEditTeacher = this.handleEditTeacher.bind(this);
  }

  showEditTeacher(){
    let value = this.state.viewEditTeacher ? false : true;
    this.setState({
      viewEditTeacher: value
    });
  }

  handleEditTeacher(teacher){
    this.props.editTeacher(teacher);
  }


  render() {


    return (
      <div>
        <div className="row float-right">
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
              editTeacher={this.handleEditTeacher}
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
