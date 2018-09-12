import React, { Component } from "React";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
  }

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
            <h2>Please login or register.</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
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

          <div className="col-6">
            <div className="banner text-center">
              <h3>Register</h3>
            </div>
            <form onSubmit={this.handleRegister}>
              <div className="form-group">
                <label htmlFor="nameInput">Name</label>
                <input type="text" className="form-control" id="nameInput" placeholder="Teacher name" />
              </div>
              <div className="form-group">
                <label htmlFor="instInput">Instrument</label>
                <input type="text" className="form-control" id="instInput" placeholder="Teacher name" />
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Email address</label>
                <input type="email" className="form-control" id="emailInput" placeholder="Email goes here" />
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default LoginRegister;