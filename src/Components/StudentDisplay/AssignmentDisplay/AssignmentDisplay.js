import React, { Component } from 'react';
import AssignmentItem from './AssignmentItem';
import AssignmentBody from './AssignmentBody';
import EditAssignment from './EditAssignment';

class StudentAssignments extends Component {
  constructor(props){
    super(props);
    this.state = {
      showEditAssignment: false
    };
    this.showEditAssignment = this.showEditAssignment.bind(this);
  }


  displayAssignmentOnClick(id){
    this.props.displayAssignmentOnClick(id);
  }

  showEditAssignment(){
    let value = this.state.showEditAssignment ? false : true;
    this.setState({
      showEditAssignment: value
    });
  }

  // componentDidMount(){
  //   console.log('assignment mount');
  //   let mostRecent, test;
  //   if(this.props.assignments){
  //     mostRecent = this.props.assignments.map( item => {
  //       console.log(item);
  //     });
  //   }
  // }


  componentDidUpdate(){
    console.log('assignment update');
  }


  render() {
    let assignmentItems;
    let currentClickedAssignment;
    let newestAssignmentDate = 0;

    if(this.props.assignments){
      assignmentItems = this.props.assignments.map( item => {
        return(
          <AssignmentItem
            key={item._id}
            assignment={item}
            displayAssignmentOnClick={this.displayAssignmentOnClick.bind(this)}
          />
        );
      });

      let id;
      if(this.props.currentClickedAssignment != '') {
        id = this.props.currentClickedAssignment;
      } else {
        id = this.props.mostRecentAssignment._id
      }

      currentClickedAssignment = this.props.assignments.map(item => {
        if(item._id === id){
          return (
            <AssignmentBody
              key={item._id}
              student={item.student}
              id={item._id}
              title={item.title}
              composer={item.composer}
              recording={item.recording}
              sheetMusic={item.sheet_music}
              notes={item.notes}
            />
          );
        }
      });
    }
    return (
      <div className="StudentAssignments">
        <div className="container">
          <div className="row">
            <div className="col col-3 assignment_search"> {assignmentItems} </div>

            <div className="col col-9 text-center assignment_body">

              <div className="row">
                <div className="col text-right">
                  {
                    (this.state.showEditAssignment) ?
                      <button className="btn btn-dark" onClick={this.showEditAssignment}>X</button>
                      :
                      <button className="btn btn-info" onClick={this.showEditAssignment}>Edit Assignment</button>
                  }
                </div>
              </div>

              {
                this.state.showEditAssignment ?
                  <EditAssignment />
                  :
                  currentClickedAssignment
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentAssignments;
