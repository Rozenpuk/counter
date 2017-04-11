import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0
    }
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decreaseCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCount.bind(this)}>+</button>
        <button onClick={this.decreaseCount.bind(this)}>-</button>
      </div>
    );
  }
}

export default App;
