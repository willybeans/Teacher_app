import React, { Component } from "React";
import Login from './Login';
import Register from './Register';

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegister: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    const body = {
      email: this.state.loginEmail
    }
    this.props.loginUser(body);
  }

  handleRegister(event) {
    event.preventDefault();
    const body = {
      name: this.state.teacherName,
      instrument: this.state.instrument,
      email: this.state.regEmail
    };
    this.props.addTeacher(body);
  }

  handleOnClick(event){
    event.preventDefault();
    if(this.state.showRegister === false){
      this.setState({
        showRegister: true
      });
    } else {
      this.setState({
        showRegister: false
      });
    }

  }

  // handleChange = (propName) => (event) => {
  //   const {student} = this.state;
  //   const newStudent = {
  //     ...student,
  //     [propName]: event.target.value
  //   };
  //   this.setState({student: newStudent});
  // }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="banner text-center col">
            { (this.state.showRegister === false) ?
              <div> Please Login or <a href="" onClick={this.handleOnClick}> Register </a>
              </div>
              :
              <div><a href="" onClick={this.handleOnClick}> Return to Login </a>
              </div>
            }
          </div>
        </div>

        <div className="row">
          <div className="col">
            { this.state.showRegister === false ?
              <Login loginUser={this.props.loginUser} />
              : <Register addTeacher={this.props.addTeacher} />}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
