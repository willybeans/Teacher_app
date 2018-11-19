import React, { Component } from 'react';

class EditAssignment extends Component {
  constructor(props){
    super(props);
    this.state = {
      assignment:{
        id: '',
        title: '',
        composer: '',
        recording: '',
        music: '',
        notes: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.currentClickedAssignment){
      this.setState({
        assignment:{
          ...this.state.assignment,
          id: this.props.currentClickedAssignment._id,
          title: this.props.currentClickedAssignment.title,
          composer: this.props.currentClickedAssignment.composer,
          recording: this.props.currentClickedAssignment.recording,
          music: this.props.currentClickedAssignment.sheet_music,
          notes: this.props.currentClickedAssignment.notes
        }
      });
    }

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
    this.props.editAssignment(this.state.assignment);
    this.props.showEditAssignment();
  }

  render() {

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

export default EditAssignment;
