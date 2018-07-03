import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Hello from Reacccccct!"
    };
  }

  render() {

    return (
      <div>
        <h2>{this.state.test}</h2>
      </div>
    )
  }
};

export default App;
