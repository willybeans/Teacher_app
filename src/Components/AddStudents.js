import React, { Component } from "react";

class AddStudents extends Component {
  constructor(props) {
    super(props);
    this.form = null;
    this.state = {
      student: {
        name: "",
        age: "",
        email: "",
        phone: "",
        goals: []
      }
    };
  
  }
  handleChange = propName => event => {
    const { student } = this.state;
    const newStudent = {
      ...student,
      [propName]: event.target.value
    };
    this.setState({ student: newStudent });
  };
  handleSubmit=(e)=> {
    e.preventDefault();
    e.stopPropagation();
    if (this.form.checkValidity() === false) {
      this.form.classList.add("was-validated");
    } else {
      this.props.addStudent(this.state.student);
    }
  }


  render() {
    return (
      <div className="add_students">
        <div className="form">
          <form
            onSubmit={this.handleSubmit}
            ref={form => (this.form = form)}
            className="needs-validation"
            noValidate
          >
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                pattern="\D+"
                className="form-control"
                id="student_name"
                onChange={this.handleChange("name")}
                value={this.state.student.name}
                required
              />
              <small id="nameFormat" className="form-text text-muted">
                ex.. Jerry Garcia
              </small>
              <div className="invalid-feedback">name cannot contain numbers</div>
            </div>

            <div className="form-group">
              <label>Age:</label>
              <input
                type="text"
                pattern="\d+"
                className="form-control"
                id="student_age"
                onChange={this.handleChange("age")}
                value={this.state.student.age}
                required
              />
              <div className="invalid-feedback">age must be a number</div>
            </div>

            <div className="form-group">
              <label>Email: </label>
              <input
                type='email'
                className="form-control"
                id="student_email"
                placeholder="Email"
                onChange={this.handleChange("email")}
                value={this.state.student.email}
                required
              />
              <div className="invalid-feedback">
                please enter a valid email address
              </div>
            </div>

            <div className="form-group">
              <label>Phone: </label>
              <input
                type="text"
                pattern="[1]? ?[0-9]{3}[- ]+[0-9]{3}[ -]+[0-9]{4}|[1]? ?\([0-9]{3}\)[ ]?[0-9]{3}[ -]+[0-9]{4}|[0-9]{10}"
                className="form-control"
                id="student_phone"
                placeholder="Phone"
                onChange={this.handleChange("phone")}
                value={this.state.student.phone}
                reqiured
              />
              <div className="invalid-feedback">
                please enter a valid phone number
              </div>
            </div>

            <div className="form-group">
              <label>Goals: </label>
              <input
                type="text"
                className="form-control"
                id="student_goals"
                placeholder="Goals"
                onChange={this.handleChange("goals")}
                value={this.state.student.goals}
              />
            </div>

            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddStudents;
