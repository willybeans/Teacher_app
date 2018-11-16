import React, { Component } from 'react';

class AssignmentBody extends Component {

  constructor(props){
    super(props);
    this.state={
      id: '',
      title: '',
      composer: '',
      recording: '',
      music: '',
      notes: []
    }
  }

  componentDidUpdate(prevProps, prevState){

    if(this.props.currentClickedAssignment){
      if(this.props.currentClickedAssignment._id !== this.state.id){
        this.setState({
          id: this.props.currentClickedAssignment._id,
          title: this.props.currentClickedAssignment.title,
          composer: this.props.currentClickedAssignment.composer,
          recording: this.props.currentClickedAssignment.recording,
          music: this.props.currentClickedAssignment.music,
          notes: this.props.currentClickedAssignment.notes,
        });
      }
    }
  }

  render() {

    return (
      <div className="AssignmentBody container">

        <div className="row">
          <div className="col">
            Title: {this.state.title}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Composer:  {this.state.composer}
          </div>
        </div>
        <div className="row">
          <div className="col">
            recording:  {this.state.recording}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Sheet Music:  {this.state.sheetMusic}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Notes:  {this.state.notes}
          </div>
        </div>

      </div>
    );
  }
}

export default AssignmentBody;
