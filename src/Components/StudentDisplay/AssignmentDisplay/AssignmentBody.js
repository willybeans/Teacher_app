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
    this.handleMountAndUpdate = this.handleMountAndUpdate.bind(this);
    this.handleDeleteAssignment = this.handleDeleteAssignment.bind(this);
  }

  componentDidMount(){
    this.handleMountAndUpdate();
  }

  componentDidUpdate(prevProps, prevState){
    this.handleMountAndUpdate();
  }

  handleDeleteAssignment(){
    this.props.deleteAssignment(this.state.id);
  }

  handleMountAndUpdate(){
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

        <button className="btn btn-danger" onClick={this.handleDeleteAssignment}>Delete</button>

      </div>
    );
  }
}

export default AssignmentBody;
