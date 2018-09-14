import React, { Component } from "React";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    const body = {
      email: this.state.loginEmail
    }
    this.props.loginUser(body);
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
      <div className="row">
        <div className="col">
          <div className="banner text-center">
            <h3>Login</h3>
          </div>
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <label htmlFor="loginEmailInput">Email address</label>
              <input name="loginEmail" type="email" className="form-control" id="loginEmailInput" placeholder="Email goes here" onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
