import React, { Component } from 'react';

class AddAssignment extends Component {
  constructor(){
    super();
    this.state={
      assignment:{
        title: '',
        composer: '',
        recording: '',
        music: '',
        notes: [],
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log(this.props.passAssignment);
  }

  handleChange = (propName) => (event) => {
    const {assignment} = this.state;
    const newAssignment = {
      ...assignment,
      [propName]: event.target.value
    };
    this.setState({assignment: newAssignment});
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.editAssignemnt(this.state.assignment);
    this.props.showEditAssignment();
  }

  render() {

    let passAssignment;
    for (let obj of this.props.assignments) {
      if(id === obj._id){
        passAssignment = obj;
      }
    };
    console.log('---------------');
    console.log(passAssignment);

    return (

      <div className='edit_assignments'>
        <div className="form">
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Title:</label>
              <input type="text" className="form-control" id="assignment_title" placeholder="9th Symphony"
                onChange={this.handleChange('title')} value={this.state.assignment.title} />
            </div>

            <div className="form-group">
              <label>Composer:</label>
              <input type="text" className="form-control" id='assignment_composer' placeholder="Beethoven"
                onChange={this.handleChange('composer')} value={this.state.assignment.composer} />
            </div>

            <div className="form-group">
              <label>Recording: </label>
              <input type="text" className="form-control" id="assignment_recording" placeholder="Recording"
                onChange={this.handleChange('recording')} value={this.state.assignment.recording}/>
            </div>

            <div className="form-group">
              <label>Sheet Music: </label>
              <input type="text" className="form-control" id="assignment_music" placeholder="Music"
                onChange={this.handleChange('music')} value={this.state.assignment.music}/>
            </div>

            <div className="form-group">
              <label>Notes: </label>
              <input type="text" className="form-control" id="assignment_recording" placeholder="Notes"
                onChange={this.handleChange('notes')} value={this.state.assignment.notes}/>
            </div>

            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddAssignment;
