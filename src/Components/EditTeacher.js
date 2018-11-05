import React, { Component } from 'react';

class EditTeacher extends Component {
  constructor(){
    super();
    this.state={
      teacher:{
        name: '',
        email: '',
        instrument: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({
      teacher: {
        name: this.props.name,
        email: this.props.email,
        instrument: this.props.instrument
      }
    });
  }

  handleChange = (propName) => (event) => {
    const {teacher} = this.state;
    const newTeacher = {
      ...teacher,
      [propName]: event.target.value
    };
    this.setState({teacher: newTeacher});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editTeacher(this.state.teacher);
    this.props.showEditTeacher();
  }

  render() {

    return (
      <div className='edit_teacher'>
        <div className="form">
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" id="teacher_name"
                onChange={this.handleChange('name')} value={this.state.teacher.name} />
            </div>

            <div className="form-group">
              <label>Instrument:</label>
              <input type="text" className="form-control" id='teacher_instrument'
                onChange={this.handleChange('instrument')} value={this.state.teacher.instrument} />
            </div>

            <div className="form-group">
              <label>Email: </label>
              <input type="text" className="form-control" id="teacher_email"
                onChange={this.handleChange('email')} value={this.state.teacher.email}/>
            </div>


            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default EditTeacher;
