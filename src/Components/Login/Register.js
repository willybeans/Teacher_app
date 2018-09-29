import React, { Component } from "React";

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
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
      <div className="col">
        <div className="banner text-center">
          <h3>Register</h3>
        </div>
        <form onSubmit={this.handleRegister}>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input name="teacherName" type="text" className="form-control" id="nameInput" placeholder="Teacher name" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="instInput">Instrument</label>
            <input name="instrument" type="text" className="form-control" id="instInput" placeholder="Teacher name" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input name="regEmail" type="email" className="form-control" id="emailInput" placeholder="Email goes here" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
