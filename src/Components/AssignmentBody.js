import React, { Component } from 'react';

class AssignmentBody extends Component {

  render() {

    return (
      <div className="AssignmentBody container">

        <div className="row">
          <div className="col">
            Title: {this.props.title}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Composer:  {this.props.composer}
          </div>
        </div>
        <div className="row">
          <div className="col">
            recording:  {this.props.recording}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Sheet Music:  {this.props.sheetMusic}
          </div>
        </div>
        <div className="row">
          <div className="col">
            Notes:  {this.props.notes}
          </div>
        </div>

      </div>
    );
  }
}

export default AssignmentBody;
